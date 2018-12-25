from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birthday = models.DateTimeField(null=True)
    age = models.IntegerField(null=True)
    weight = models.IntegerField(null=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class FoodEntry(models.Model):
    food_item = models.CharField(max_length=150, null=False)
    amount_eaten = models.IntegerField(null=False)  # always in grams
    time_eaten = models.DateTimeField(null=False)
    associated_user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=False)


class FoodGroups(models.Model):
    group_name = models.CharField(max_length=50, null=False, blank=False)
    group_id = models.IntegerField(null=False, blank=False)
