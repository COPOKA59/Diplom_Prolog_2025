from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from rest_framework import routers
from rest_framework_nested import routers
from users.views import *
from works.views.CViewWorks import UserWorksViewSet

router = routers.SimpleRouter()
router.register(r'me', MeViewSet, basename='me')
router.register(r'', UsersViewSet, basename='users')

nested_router = routers.NestedSimpleRouter(router, r'', lookup='users')
nested_router.register(r'works', UserWorksViewSet, basename='user_works')

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('', include(router.urls)),
    path('', include(nested_router.urls)),
]