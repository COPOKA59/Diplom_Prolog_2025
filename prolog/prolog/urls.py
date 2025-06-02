from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('helthcheck/', include('works.urls')),
    path('api/v1/', include('works.urls')),
]
