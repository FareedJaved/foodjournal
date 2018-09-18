from journalapi.models import User, FoodEntry
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = User 
        fields = ('url', 'first_name', 'last_name', 'email', 'age', 'weight', 'birthday')


class FoodEntrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FoodEntry 
        fields = ('url', 'food_item', 'amount_eaten', 'time_eaten', 'associated_user')