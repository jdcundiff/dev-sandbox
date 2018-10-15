from django.db import models

class Update(models.Model):
    project = models.ForeignKey(
        'Project',
        on_delete=models.CASCADE,
    )
    title = models.CharField(max_length=60)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Project(models.Model):
    LIMBO = 'LI'
    IN_PROGRESS = 'IP'
    COMPLETE = 'CO'
    STATUS_CHOICES = (
        (LIMBO, 'Limbo'),
        (IN_PROGRESS, 'In Progress'),
        (COMPLETE, 'Complete'),
    )
    status = models.CharField(
        max_length=2,
        choices=STATUS_CHOICES,
        default=LIMBO
    )
    title = models.CharField(max_length=60)
    description = models.TextField()
    github = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    pass
