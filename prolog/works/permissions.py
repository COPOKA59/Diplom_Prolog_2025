from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission, SAFE_METHODS
from works.models import Authors

class IsAuthorOfWorkOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        if not request.user or not request.user.is_authenticated:
            return False

        work_id = view.kwargs.get('work_pk') or request.data.get('work')

        if not work_id:
            return False

        return Authors.objects.filter(user=request.user, work_id=work_id).exists()

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        return Authors.objects.filter(user=request.user, work=obj.work).exists()


class IsAuthorOrReadOnlyPublished(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return obj.publish or request.user in obj.authors.all()

        return request.user in obj.authors.all()