from api import services
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_github_user_data_api(request, username):
    data = services.get_github_user_data(username)

    return Response(data)


@api_view(['GET'])
def get_spotify_artist_data_api(request, id):
    data = services.get_artist_data(id)

    return Response(data)