from api import services
from rest_framework.response import Response
from rest_framework.decorators import api_view

# http://127.0.0.1:8000/get_user/<user>
@api_view(['GET'])
def get_github_user_data_api(request, username):
    data = services.get_github_user_data(username)
    return Response(data)

# http://127.0.0.1:8000/spotify/<artist id>
@api_view(['GET'])
def get_artist_data_api(request, id):
    data = services.get_artist_data(id)
    return Response(data)

# http://127.0.0.1:8000/weather/<city>
@api_view(['GET'])
def get_city_weather_api(request, city):
    data = services.get_city_weather(city)
    return  Response(data)

# http://127.0.0.1:8000/coin/<coin symbol>
@api_view(['GET'])
def get_coins_market_api(request, symbol):
    data = services.get_coins_market(symbol)
    return Response(data)