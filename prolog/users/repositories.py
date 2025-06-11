from django.contrib.auth import get_user_model

User = get_user_model()

def get_all_users():
    return User.objects.all()

def get_user_by_id(user_id):
    return User.objects.filter(id=user_id).first()

def create_user(username, password, email="", description=""):
    return User.objects.create_user(
        username=username,
        password=password,
        email=email,
        description=description
    )