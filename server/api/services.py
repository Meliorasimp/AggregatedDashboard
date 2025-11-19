from dotenv import load_dotenv
import os, requests

load_dotenv()

GITHUB_PAT = os.getenv('GITHUB_PAT') 
GITHUB_API = 'https://api.github.com'

def get_github_user_data(username):
    url = f'{GITHUB_API}/users/{username}'
    headers = {
        'authorization': GITHUB_PAT,
        'accept': 'application/vnd.github+json'
    }

    response = requests.get(url, headers)

    return response.json()