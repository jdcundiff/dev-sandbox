from django.urls import path
from . import views

urlpatterns = [
    path('api/projects/', views.ProjectListCreate.as_view()),
    path('api/updates/', views.UpdateListCreate.as_view()),
    path('api/tags/', views.TagListCreate.as_view()),
]
