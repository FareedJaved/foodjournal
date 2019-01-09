from django.contrib.auth import login

from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.serializers import AuthTokenSerializer

from knox.auth import TokenAuthentication
from knox.views import LoginView as KnoxLoginView

from journalapi.models import User, FoodEntry, FoodGroups
from foodjournal.serializers import FoodEntrySerializer, FoodGroupsSerializer


class LoginView(KnoxLoginView):
    """
    API endpoint to log users in
    """
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)


class FoodEntryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows food entries to be viewed or edited.
    """
    queryset = FoodEntry.objects.all()
    serializer_class = FoodEntrySerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated)


class FoodGroupsViewSet(viewsets.ModelViewSet):
    """
    A view that returns the food groups from the USDA database.
    """

    queryset = FoodGroups.objects.all()
    serializer_class = FoodGroupsSerializer
    authentication_classes = (TokenAuthentication)
    permission_classes = (IsAuthenticated)

    # api_key = os.environ['USDA']

    # def get_food_groups(self):
    #     url = f'https://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key={self.api_key}'
    #     api_response = requests.get(url)

    #     return api_response

    # def list(self, request, format=None):
    #     food_group_query = self.get_food_groups()
    #     return Response({"food_groups": food_group_query})
