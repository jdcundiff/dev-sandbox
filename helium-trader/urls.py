from django.conf.urls import include, url
from portfolio import views
import frontend.urls

# Use rest API and routers to handle URL's.
urlpatterns = [
    url(r'', include(frontend.urls)),
]
