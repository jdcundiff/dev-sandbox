from django.db import models

class Skill(models.Model):
    FAMILIAR = 'FA'
    PROFICIENT = 'PR'
    PROFICIENCY_CHOICES = (
        (FAMILIAR, 'Familiar'),
        (PROFICIENT, 'Proficient'),
    )
    proficiency = models.CharField(
        max_length=2,
        choices=PROFICIENCY_CHOICES,
        default=FAMILIAR,
    )
    hours_spent = models.IntegerField(default=0)
    years = models.IntegerField(default=0)
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
