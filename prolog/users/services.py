from .repositories import *

def register_user(username, password, email="", description=""):
    return create_user(username, password, email, description)

def list_users():
    return get_all_users()

def current_user(user_id):
    return get_user_by_id(user_id)