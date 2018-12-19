from journalapi.models import User, FoodEntry, FoodGroups
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from foodjournal.serializers import UserSerializer, FoodEntrySerializer, FoodGroupsSerializer
from requests import request 
import os
import requests


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


class FoodGroupsViewSet(viewsets.ModelViewSet):
    """
    A view that returns the food groups from the USDA database.
    """
    
    queryset = FoodGroups.objects.all()
    serializer_class = FoodGroupsSerializer
    # api_key = os.environ['USDA']


    # def get_food_groups(self):
    #     url = f'https://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key={self.api_key}'
    #     api_response = requests.get(url)

    #     return api_response
    
    # def list(self, request, format=None):
    #     food_group_query = self.get_food_groups() 
    #     return Response({"food_groups": food_group_query})
        


    