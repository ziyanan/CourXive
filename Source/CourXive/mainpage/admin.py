from django.contrib import admin
from .models import Instructor, Subject, Course

# admin.site.register(Instructor)
admin.site.register(Subject)
# admin.site.register(Course)

class InstructorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'institute')

# Register the admin class with the associated model
admin.site.register(Instructor, InstructorAdmin)


class CourseAdmin(admin.ModelAdmin):
    list_filter = ('subject', 'instructor')

admin.site.register(Course, CourseAdmin)