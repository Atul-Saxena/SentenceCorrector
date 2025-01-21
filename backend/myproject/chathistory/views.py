from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ChatModel

# Create your views here.
@api_view(['POST'])
def createChat(request):
    return Response({"message": "Chat created successfully"}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def getChat(request, user_id):
    print(user_id)
    chats = ChatModel.objects.filter(user_id=user_id)
    print(chats)
    return Response({"message": "Chat retrieved successfully"}, status=status.HTTP_200_OK)