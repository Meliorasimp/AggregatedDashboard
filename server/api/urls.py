from django.urls import path
from api import views

urlpatterns = [
    path('get_user/<str:username>', views.get_github_user_data_api),
    path('spotify/<str:id>', views.get_spotify_artist_data_api),
]