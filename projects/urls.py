from django.urls import path
from . import views

urlpatterns = [
    path('api/projects/', views.ProjectListCreate.as_view()),
]
