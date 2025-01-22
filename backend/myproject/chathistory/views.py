from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ChatModel

# Create your views here.
@api_view(['POST'])
def createChat(request):
    data = request.data
    userID = data.get('user_id')
    originalText = data.get('original_text')
    processedText = data.get('processed_text')

    if not all([userID, originalText, processedText]):
        return Response(
            {"error": "All fields (userid, originaltext, processedtext) are required."},
            status=status.HTTP_400_BAD_REQUEST
        )
    try:
        chat_entry = ChatModel.objects.create(user_id=userID, original_text=originalText, processed_text=processedText)
        return Response(
            {"message": "Data saved successfully.", "id": chat_entry.user_id},
            status=status.HTTP_201_CREATED
        )
    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
def getChat(request, user_id):
    
    try:
        # Query the database for chats matching the userid
        chats = ChatModel.objects.filter(user_id=user_id)

        if not chats.exists():
            return Response(
                {"message": "No chats found for the given userid.","data":[]},
                status=status.HTTP_404_NOT_FOUND
            )

        # Serialize the data
        chat_data = [
            {
                "id": chat.id,
                "userid": chat.user_id,
                "originaltext": chat.original_text,
                "processedtext": chat.processed_text
            }
            for chat in chats
        ]

        return Response(
            {"message": "Chats retrieved successfully.", "data": chat_data},
            status=status.HTTP_200_OK
        )

    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )