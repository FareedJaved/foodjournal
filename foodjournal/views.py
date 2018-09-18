from journalapi.models import User, FoodEntry
from rest_framework import viewsets
from foodjournal.serializers import UserSerializer, FoodEntrySerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited. 
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class FoodEntryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = FoodEntry.objects.all()
    serializer_class = FoodEntrySerializer
    