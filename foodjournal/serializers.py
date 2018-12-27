from rest_framework import serializers

from journalapi.models import User, FoodEntry, FoodGroups


class CreateUserSerialzer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], None, validated_data['password'])

        return user


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name',
                  'email', 'username')


class FoodEntrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FoodEntry
        fields = ('url', 'food_item', 'amount_eaten',
                  'time_eaten', 'associated_user')


class FoodGroupsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FoodGroups
        fields = ('group_name', 'group_id')
