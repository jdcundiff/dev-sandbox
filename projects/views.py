from projects.models import Project, Update
from projects.serializers import ProjectSerializer, UpdateSerializer
from rest_framework import generics

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class UpdatetListCreate(generics.ListCreateAPIView):
    queryset = Update.objects.all()
    serializer_class = UpdateSerializer
