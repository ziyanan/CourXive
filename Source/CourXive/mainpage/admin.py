from django.contrib import admin
from .models import Instructer, Subject, Course

# admin.site.register(Instructer)
admin.site.register(Subject)
# admin.site.register(Course)

class InstructerAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'institute')

# Register the admin class with the associated model
admin.site.register(Instructer, InstructerAdmin)


class CourseAdmin(admin.ModelAdmin):
    list_filter = ('subject', 'instructer')

admin.site.register(Course, CourseAdmin)