from django.conf.urls import include, url
from rest_framework import routers
from portfolio import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Use rest API and routers to handle URL's.
urlpatterns = [
    url(r'^', include(router.urls)),
]
