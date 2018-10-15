from django.conf.urls import include, url
from django.urls import path
import frontend.urls

from django.contrib import admin
admin.autodiscover()

# Use rest API and routers to handle URL's.
urlpatterns = [
    url(r'', include(frontend.urls)),
    path('', include('bio.urls')),
    path('', include('projects.urls')),
    path('', include('skills.urls')),
    path('admin/', admin.site.urls),
]
