from django.test import TestCase
from journalapi.models import User 
# Testing the User Model
class UserModelTests(TestCase):

    def test_user_has_name(self):
        test_user = User()
        test_user.first_name = "Yucca"
        test_user.last_name = "Momo
        test_user.save()
        self.assertIsNotNone(test_user.first_name)
        self.assertIsNotNone(test_user.last_name)
    
    def test_user_has_email(self):
        test