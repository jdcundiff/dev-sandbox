from django.contrib import admin
from .models import Project, Update

@admin.register(Project, Update)
class ProjectAdmin(admin.ModelAdmin):
    pass
