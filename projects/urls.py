from django.urls import path
from . import views

urlpatterns = [
    path('api/projects/', views.ProjectListCreate.as_view()),
    path('api/updates/<int:project_id>/', views.UpdateListCreate.as_view()),
    path('api/tags/<int:project_id>/', views.TagListCreate.as_view()),
]
