from django.db import models

# Create your models here.
class ChatModel(models.Model):
    user_id = models.CharField(max_length=100)
    original_text = models.TextField()
    processed_text = models.TextField()

    def __str__(self):
        return self.user_id