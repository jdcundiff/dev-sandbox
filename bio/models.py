from django.db import models

class Bio(models.Model):
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    email = models.EmailField(default=' ')
    title = models.CharField(max_length=30)
    objective = models.BooleanField(default=True)
    description = models.TextField()
    image = models.URLField()
    github = models.URLField()
    linkedin = models.URLField()

    def __str__(self):
        return self.email
