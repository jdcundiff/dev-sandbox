from django.contrib import admin
from .models import Bio

@admin.register(Bio)
class BioAdmin(admin.ModelAdmin):
    def __str__(self):
        return self.name

