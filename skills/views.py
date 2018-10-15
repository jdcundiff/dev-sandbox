from skills.models import Skill
from skills.serializers import SkillSerializer
from rest_framework import generics

class SkillListCreate(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
