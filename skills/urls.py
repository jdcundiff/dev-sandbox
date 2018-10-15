from django.urls import path
from . import views

urlpatterns = [
    path('api/skills/', views.SkillListCreate.as_view()),
]
