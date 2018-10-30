from rest_framework import serializers
from projects.models import Project, Update, Tag

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Update
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
