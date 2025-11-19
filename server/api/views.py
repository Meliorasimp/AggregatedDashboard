from api import services
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_github_user_data(request):
    name = 'Meliorasimp' # Test lng to bitch, ill retrieve from request pag may front-end na
    response = services.get_github_user_data(name)

    return Response(response)