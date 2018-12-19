from django.db import models
from django.utils import timezone

# Create your models here.
class User(models.Model): 
    first_name = models.CharField(max_length=100, null=False)
    last_name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, null=False)
    age = models.IntegerField(null=True)
    weight = models.IntegerField(null=True)
    birthday = models.DateTimeField(null=True)

class FoodEntry(models.Model): 
    food_item = models.CharField(max_length=150, null=False)
    amount_eaten = models.IntegerField(null=False) # always in grams 
    time_eaten = models.DateTimeField(null=False)
    associated_user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)

class FoodGroups(models.Model): 
    group_name = models.CharField(max_length=50, null=False, blank=False)
    group_id = models.IntegerField(null=False, blank=False)

