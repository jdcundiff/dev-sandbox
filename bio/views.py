from bio.models import Bio
from bio.serializers import BioSerializer
from rest_framework import generics

class BioListCreate(generics.ListCreateAPIView):
    queryset = Bio.objects.all()
    serializer_class = BioSerializer
