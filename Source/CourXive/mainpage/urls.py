from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('courses/', views.CourseListView.as_view(), name='courses'),
    path('course/<uuid:pk>', views.CourseDetailView.as_view(), name='course-detail'),
    path('search/', views.SearchResultsView.as_view(), name='search_results'),
]