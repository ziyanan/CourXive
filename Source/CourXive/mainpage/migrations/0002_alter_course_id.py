# Generated by Django 3.2.1 on 2021-05-06 01:54

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('mainpage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, help_text='Unique ID for this course', primary_key=True, serialize=False),
        ),
    ]
