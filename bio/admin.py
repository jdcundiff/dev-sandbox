from django.contrib import admin
from .models import Bio

@admin.register(Bio)
class BioAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')
    list_display_links = ('first_name', 'last_name')
