""" foodjournal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from rest_framework import routers

from knox import views as knox_views

from foodjournal.views import LoginView
from foodjournal import views
from journalapi.registration_api import RegistrationAPI

# Routers provide an easy way of automatically determining the URL conf
router = routers.DefaultRouter()
router.register(r'food', views.FoodEntryViewSet)
router.register(r'foodgroups', views.FoodGroupsViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'login/', LoginView.as_view(), name='knox_login'),
    url(r'logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    url(r'logoutall/', knox_views.LogoutAllView.as_view(),
        name='knox_logoutall'),
    url(r'^', include(router.urls)),
    url(r'api/auth/', include('knox.urls')),
    url(r'^api/auth/register/$', RegistrationAPI.as_view()),
]
