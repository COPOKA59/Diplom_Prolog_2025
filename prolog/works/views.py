from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Works
from .serializers import WorksSerializer


# Тестовый просмотр по маршруту.
def works(request):
    works = Works.objects.all()
    return HttpResponse("<h4>Проверка работы!!!</h4><br><h5>Всё работает! Перейдите по http://127.0.0.1:8000/api/v1/works/</h5>")

# Тестовый вывод Json
class WorksAPIView(APIView):
    def get(self,request):
        works = Works.objects.all()
        return Response({'works': WorksSerializer(works, many=True).data})

    def post(self,request):
        serializer = WorksSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'work': serializer.data})

    def put(self,request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response({"error": "Метод PUT не определён"})

        try:
            instance = Works.objects.get(pk=pk)
        except Works.DoesNotExist:
            return Response({"error": "Объект не найден"})

        serializer = WorksSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'work': serializer.data})

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response({"error": "Метод DELETE не определён"})
        try:
            work = Works.objects.get(pk=pk)
            work.delete()
            return Response({'work': "Запись удалена - " + str(pk)})
        except Works.DoesNotExist:
            return Response({'work': "Запись НЕ удалена - " + str(pk)})

# Представление произведений
# class WorksAPIView(generics.ListAPIView):
#     queryset = Works.objects.all()
#     serializer_class = WorksSerializer

