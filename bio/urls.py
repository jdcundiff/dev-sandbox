from django.urls import path
from . import views

urlpatterns = [
    path('api/bio/', views.BioListCreate.as_view()),
]
