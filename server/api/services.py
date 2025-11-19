from dotenv import load_dotenv
import base64, os, requests, time

load_dotenv()

COINGECKO_API_KEY = os.getenv('GITHUB_API_KEY')
COINGECKO_API = 'https://api.coingecko.com/api/v3'

GITHUB_PAT = os.getenv('GITHUB_PAT') 
GITHUB_API = 'https://api.github.com'

OPENWEATHER_API_KEY = os.getenv('OPENWEATHER_API_KEY')
OPENWEATHER_API = 'https://api.openweathermap.org'

SPOTIFY_CLIENT_ID = os.getenv('SPOTIFY_CLIENT_ID')
SPOTIFY_CLIENT_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
SPOTIFY_API = 'https://api.spotify.com/v1'

spotify_access_token_data = {
    'token': None,
    'expires_at': 0
}

def get_github_user_data(username):
    global GITHUB_API
    global GITHUB_PAT

    url = f'{GITHUB_API}/users/{username}'
    headers = {
        'authorization': GITHUB_PAT,
        'accept': 'application/vnd.github+json'
    }

    response = requests.get(url, headers)

    return response.json()

def get_github_user_data(username):
    global GITHUB_API
    global GITHUB_PAT

    url = f'{GITHUB_API}/users/{username}'
    headers = {
        'authorization': GITHUB_PAT,
        'accept': 'application/vnd.github+json'
    }

    response = requests.get(url, headers)

    return response.json()

# Helper for converting city to latitude and longitude
def get_city_coordinates(city):
    global OPENWEATHER_API
    global OPENWEATHER_API_KEY

    path = 'geo/1'
    url = f'{OPENWEATHER_API}/{path}/direct?q={city}&limit=1&appid={OPENWEATHER_API_KEY}'
    response = requests.get(url)

    if response.status_code == 200:
        coor = [response['lat'], response['lon']]
    else:
        # Change coor to Manila :p
        coor = [14.5948914, 120.9782618]
        print(f'An error occured [{response.status_code}]')

    return coor

def get_city_weather(city):
    global OPENWEATHER_API
    global OPENWEATHER_API_KEY

    lat, lon = get_city_coordinates(city)
    path = 'data/2.5'
    url = f'{OPENWEATHER_API}/{path}weather?lat={lat}&lon={lon}&appid={OPENWEATHER_API_KEY}'
    response = requests.get(url)

    return response.json()

def get_all_coin_info_api():
    global COINGECKO_API
    global COINGECKO_API_KEY

    endpoint = 'coins/list'
    url = f'{COINGECKO_API}/{endpoint}'
    response = requests.get(url)

    return response.json()

def get_coins_market(symbol):
    global COINGECKO_API
    global COINGECKO_API_KEY

    headers = {
        'x-cg-api-key': COINGECKO_API_KEY
    }

    endpoint = 'coins/markets'
    url = f'{COINGECKO_API}/{endpoint}?vs_currency=usd&symbols={symbol}'
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f'An error occured [{response.status_code}]')
    
    return response.json()

# Helper for requesting spotify access token, cause it expires every hour
def get_spotify_access_token():
    global SPOTIFY_API
    global SPOTIFY_CLIENT_ID
    global SPOTIFY_CLIENT_SECRET
    global spotify_access_token_data

    if spotify_access_token_data['token'] and time.time() < spotify_access_token_data['expires_at'] - 10:
        return spotify_access_token_data['token']
    
    print('false u bish')

    auth_header = base64.b64encode(f"{SPOTIFY_CLIENT_ID}:{SPOTIFY_CLIENT_SECRET}".encode()).decode()
    headers = {
        'Authorization': f'Basic {auth_header}'
    }

    data = {
        'grant_type': 'client_credentials'
    }

    url = 'https://accounts.spotify.com/api/token'
    response = requests.post(url, headers=headers, data=data)
    result = response.json()

    print(result)

    spotify_access_token_data['token'] = result['access_token']
    spotify_access_token_data['expires_at'] = time.time() + result['expires_in']

    return spotify_access_token_data['token']

def get_artist_data(id):
    global SPOTIFY_API
    global spotify_access_token_data

    access_token = get_spotify_access_token()

    url = f'{SPOTIFY_API}/artists/{id}'
    headers = {
        'Authorization': f'Bearer  {access_token}'
    }

    response = requests.get(url, headers=headers)

    return response.json()

