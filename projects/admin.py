from django_summernote.admin import SummernoteModelAdmin
from django.contrib import admin
from .models import Project, Update, Tag


@admin.register(Update)
class UpdateAdmin(SummernoteModelAdmin):
    list_display = ('title', 'updated_at', 'created_at')
    summernote_fields = '__all__'

class UpdateInline(admin.TabularInline):
    model = Update

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('title', 'info')

class TagInline(admin.TabularInline):
    model = Tag

@admin.register(Project)
class ProjectAdmin(SummernoteModelAdmin):
    list_display = ('title', 'status', 'updated_at', 'created_at')
    list_display_links = ('title', 'status')
    summernote_fields = '__all__'
    inlines = [
        UpdateInline, TagInline
    ]
