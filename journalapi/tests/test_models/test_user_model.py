from django.test import TestCase
from journalapi.models import User 

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
        self.assertIsNone(test_user.birthday)
        self.assertIsNone(test_user.age)
        self.assertIsNone(test_user.weight)