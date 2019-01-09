from rest_framework import serializers
from django.contrib.auth import authenticate
from journalapi.models import User, FoodEntry, FoodGroups


class CreateUserSerialzer(serializers.ModelSerializer):
    """
    Validating data when creating a User
    """
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], None, validated_data['password'])

        return user


class LoginUserSerializer(serializers.Serializer):
    """
    Validating data when loggin in a user
    """
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError(
            "Unable to login with provided credentials")


class UserSerializer(serializers.HyperlinkedModelSerializer):
    """
    Only validates user data
    """
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name',
                  'email', 'username')


class FoodEntrySerializer(serializers.HyperlinkedModelSerializer):
    """
    Validate Food Entry data
    """
    class Meta:
        model = FoodEntry
        fields = ('url', 'food_item', 'amount_eaten',
                  'time_eaten', 'associated_user')


class FoodGroupsSerializer(serializers.HyperlinkedModelSerializer):
    """
    Validate Food Group data
    """
    class Meta:
        model = FoodGroups
        fields = ('group_name', 'group_id')
