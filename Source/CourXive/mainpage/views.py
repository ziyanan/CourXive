from django.shortcuts import render
from django.http import HttpResponse
from mainpage.models import Course, Instructer, Subject
from django.views import generic
from django.shortcuts import get_object_or_404

def index(request):
    """View function for home page of site."""

    # Generate counts of some of the main objects
    num_courses = Course.objects.all().count()

    # The 'all()' is implied by default.
    num_instructers = Instructer.objects.count()

    num_subjects = Subject.objects.count()

    context = {
        'num_courses': num_courses,
        'num_subjects': num_subjects,
        'num_instructers': num_instructers,
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)

class CourseListView(generic.ListView):
    model = Course
    paginate_by = 10
    context_object_name = 'course_list'   # your own name for the list as a template variable
    queryset = Course.objects.all() # Get all courses
    template_name = 'courses/course_list.html'  # Specify your own template name/location

class CourseDetailView(generic.DetailView):
    model = Course
    def course_detail_view(request, primary_key):
        course = get_object_or_404(Course, pk=primary_key)
        return render(request, 'mainpage/course_detail.html', context={'course': course})