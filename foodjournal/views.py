from journalapi.models import User, FoodEntry
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from foodjournal.serializers import UserSerializer, FoodEntrySerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited. 
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class FoodEntryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows food entries to be viewed or edited.
    """
    queryset = FoodEntry.objects.all()
    serializer_class = FoodEntrySerializer


class UserCountView(viewsets.ViewSet):
    """
    A view that returns the count of active users in JSON.
    """
    renderer_classes = (JSONRenderer, )

    queryset = User.objects.all()
    def list(self, request, format=None):
        return Response({"fj_count": len(self.queryset)})


    