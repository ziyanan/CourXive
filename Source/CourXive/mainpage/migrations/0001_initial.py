# Generated by Django 3.2.1 on 2021-05-05 22:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Instructer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('institute', models.CharField(max_length=100)),
            ],
            options={
                'ordering': ['last_name', 'first_name'],
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Enter a subject area (e.g. Computer Science)', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('summary', models.TextField(help_text='Enter a brief description of the course', max_length=1000)),
                ('link', models.CharField(help_text='Link to the online course', max_length=200, unique=True, verbose_name='Link')),
                ('instructer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='mainpage.instructer')),
                ('subject', models.ManyToManyField(help_text='Select a subject for this course', to='mainpage.Subject')),
            ],
        ),
    ]
