from projects.models import Project, Update, Tag
from projects.serializers import ProjectSerializer, UpdateSerializer, TagSerializer
from rest_framework import generics

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class UpdateListCreate(generics.ListCreateAPIView):
    queryset = Update.objects.all()
    serializer_class = UpdateSerializer

class TagListCreate(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
