from django.db import models

# Create your models here.
class User(models.Model): 
    first_name = models.CharField(max_length=100, null=False)
    last_name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, null=False)
    age = models.IntegerField(null=True)
    weight = models.IntegerField(null=True)
    birthday = models.DateTimeField(null=True)