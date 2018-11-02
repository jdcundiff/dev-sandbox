from skills.models import Skill
from skills.serializers import SkillSerializer
from rest_framework import generics

class SkillListCreate(generics.ListCreateAPIView):
    queryset = Skill.objects.order_by('-years', '-hours_spent')
    serializer_class = SkillSerializer
