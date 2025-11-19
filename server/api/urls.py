from django.urls import path
from api import views

urlpatterns = [
    path('get_user', views.get_github_user_data),
]