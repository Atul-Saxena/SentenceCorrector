from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from happytransformer import HappyTextToText, TTSettings

@api_view(['POST'])
def process_text(request):
    input_text = request.data.get('text', '')

    if not input_text:
        return Response({"error": "No text provided"}, status=status.HTTP_400_BAD_REQUEST)
    
    happy_tt = HappyTextToText("T5", "vennify/t5-base-grammar-correction")

    args = TTSettings(num_beams=5, min_length=1)

    # Add the prefix "grammar: " before each input 
    result = happy_tt.generate_text("grammar: " + input_text, args=args)

    return Response({"original_text": input_text, "processed_text": result.text})
