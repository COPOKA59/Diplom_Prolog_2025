from django.urls import path
from works.views import WorksAPIView

urlpatterns = [
    path('', WorksAPIView.as_view(), name='works'),
    path('<int:pk>/', WorksAPIView.as_view(), name='work'),
]