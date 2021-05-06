from django.db import models
from django.urls import reverse # Used to generate URLs by reversing the URL patterns
import uuid # Required for unique book instances
# Create your models here.

class Subject(models.Model):
    """Model representing a class subject area"""
    name = models.CharField(max_length=200, help_text='Enter a subject area (e.g. Computer Science)')

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Course(models.Model):
    """Model representing a class."""
    title = models.CharField(max_length=200)

    instructer = models.ForeignKey('Instructer', on_delete=models.SET_NULL, null=True)

    summary = models.TextField(max_length=1000, help_text='Enter a brief description of the course')
    link = models.CharField('Link', max_length=200, unique=True, help_text='Link to the online course')

    subject = models.ManyToManyField(Subject, help_text='Select a subject for this course')
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for this course')
    
    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the url to access a detail record for this class."""
        return reverse('course-detail', args=[str(self.id)])


class Instructer(models.Model):
    """Model representing an instructer."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    institute = models.CharField(max_length=100)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the url to access a particular instructer instance."""
        return reverse('instructer-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.last_name}, {self.first_name}'