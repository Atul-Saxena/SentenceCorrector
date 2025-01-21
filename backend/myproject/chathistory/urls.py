from django.urls import path
from . import views

urlpatterns = [
    path('createchat/', views.createChat, name='createChat'),
    path('getchat/<user_id>/', views.getChat, name='getChat'),
]
