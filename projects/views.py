from projects.models import Project, Update, Tag
from projects.serializers import ProjectSerializer, UpdateSerializer, TagSerializer
from rest_framework import generics

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.order_by('created_at')
    serializer_class = ProjectSerializer

class UpdateListCreate(generics.ListCreateAPIView):
    serializer_class = UpdateSerializer
    def get_queryset(self):
        return Update.objects.filter(project_id=self.kwargs['project_id'])

class TagListCreate(generics.ListCreateAPIView):
    serializer_class = TagSerializer
    def get_queryset(self):
        return Tag.objects.filter(project=self.kwargs['project_id'])
