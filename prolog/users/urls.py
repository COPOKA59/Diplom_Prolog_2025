from django.urls import path, include
# from rest_framework import routers
from rest_framework_nested import routers
from users.views import *

router = routers.SimpleRouter()
router.register(r'', UsersViewSet)

urlpatterns = [
    path('', include(router.urls)),
]