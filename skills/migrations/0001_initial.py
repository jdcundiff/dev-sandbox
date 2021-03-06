# Generated by Django 2.1.2 on 2018-10-15 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('proficiency', models.CharField(choices=[('FA', 'Familiar'), ('PR', 'Proficient')], default='FA', max_length=2)),
                ('hours_spent', models.IntegerField()),
                ('name', models.CharField(max_length=30)),
            ],
        ),
    ]
