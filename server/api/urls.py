from django.urls import path
from api import views

urlpatterns = [
    path('get_user/<str:username>', views.get_github_user_data_api),
    path('spotify/<str:id>', views.get_artist_data_api),
    path('weather/<str:city>', views.get_city_weather_api),
    path('coin/<str:symbol>', views.get_coins_market_api),
]