from django_summernote.admin import SummernoteModelAdmin
from django.contrib import admin
from .models import Project, Update

@admin.register(Project, Update)
class ProjectAdmin(SummernoteModelAdmin):
    summernote_fields = '__all__'

    def __str__(self):
        return self.title
