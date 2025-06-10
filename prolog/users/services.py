from .repositories import get_user_by_username, create_user
from django.core.exceptions import ValidationError

def register_user(username, password, email="", description=""):
    return create_user(username, password, email, description)