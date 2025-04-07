from django.contrib import admin
from django.urls import path, include
from works.views import WorksAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('helthcheck/', include('works.urls')),
    path('api/v1/works/', include('works.urls')),
]
