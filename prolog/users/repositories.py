from django.contrib.auth import get_user_model

User = get_user_model()

def get_user_by_username(username):
    return User.objects.filter(username=username).first()

def create_user(username, password, email="", description=""):
    return User.objects.create_user(
        username=username,
        password=password,
        email=email,
        description=description
    )