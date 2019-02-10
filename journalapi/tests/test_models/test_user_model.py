from django.test import TestCase
from journalapi.models import User, FoodEntry
from django.utils import timezone
# Testing the User Model


class UserModelTests(TestCase):

    def test_user_has_name(self):
        test_user = User()
        test_user.first_name = "Yucca"
        test_user.last_name = "Momo"
        test_user.email = "test_doge@yahoo.com"
        test_user.save()
        self.assertIsNotNone(test_user.first_name)
        self.assertIsNotNone(test_user.last_name)
        self.assertIsNotNone(test_user.email)

    def test_food_entry_has_user(self):
        test_user = User()
        test_user.first_name = "Yucca"
        test_user.last_name = "Momo"
        test_user.email = "test_dodge@yahoo.com"
        test_user.save()
        tiempo = timezone.now()
        test_foodentry = FoodEntry()
        test_foodentry.food_item = "apple"
        test_foodentry.amount_eaten = 3
        test_foodentry.time_eaten = tiempo
        test_foodentry.associated_user = test_user
        test_foodentry.save()
        self.assertEqual(test_user.pk, test_foodentry.associated_user.id)
