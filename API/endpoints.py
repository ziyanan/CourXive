"""
This is the file containing all of the endpoints for our flask app.
The endpoint called `endpoints` will return all available endpoints.
"""

from flask import Flask
from flask_restx import Resource, Api
# from flask_restx import fields

# import API.db as db

app = Flask(__name__)
api = Api(app)

HELLO = 'hello'
AVAILABLE = 'Available endpoints:'

COURSES_ROUTE = '/content/courses'
SUBJECTS_ROUTE = '/content/subjects'
INSTRUCTORS_ROUTE = '/content/instructors'


@api.route('/hello')
class HelloWorld(Resource):
    """
    The purpose of the HelloWorld class is to have a simple test to see if the
    app is working at all.
    """
    def get(self):
        """
        A trivial endpoint to see if the server is running.
        It just answers with "hello world."
        """
        return {HELLO: 'world'}


@api.route('/endpoints/list')
class Endpoints(Resource):
    """
    This class will serve as live, fetchable documentation of what endpoints
    are available in the system.
    """
    def get(self):
        """
        The `get()` method will return a list of available endpoints.
        """
        epts = sorted(rule.rule for rule in api.app.url_map.iter_rules())
        return {AVAILABLE: epts}


@api.route('/courses/list')
class Courses(Resource):
    """
    This class supports fetching a list of all courses.
    """
    def get(self):
        """
        This method returns all courses.
        """
        return {COURSES_ROUTE: 'COURSES LIST'}


@api.route('/courses/search')
class Courses_search(Resource):
    """
    This class supports search courses from the course list.
    """
    def get(self):
        """
        This method returns course search result.
        """
        return {COURSES_ROUTE: 'COURSE SEARCH RESULT'}


@api.route('/courses/review')
class Courses_review(Resource):
    """
    This class supports review a course including comments or rating.
    """
    def get(self):
        """
        This method returns new review for the course.
        """
        return {COURSES_ROUTE: 'COURSE REVIEW'}


@api.route('/subjects/list')
class Subjects(Resource):
    """
    This class supports fetching a list of all subjects.
    """
    def get(self):
        """
        This method returns all subjects.
        """
        return {SUBJECTS_ROUTE: 'SUBJECTS LIST'}


@api.route('/subjects/search')
class Subjects_search(Resource):
    """
    This class supports search subjects from the subject list.
    """
    def get(self):
        """
        This method returns subject search result.
        """
        return {SUBJECTS_ROUTE: 'SUBJECT SEARCH RESULT'}


@api.route('/instructors/list')
class Instructors(Resource):
    """
    This class supports fetching a list of all instructors.
    """
    def get(self):
        """
        This method returns all instructors.
        """
        return {INSTRUCTORS_ROUTE: 'INSTRUCTORS LIST'}


@api.route('/instructors/search')
class Instructors_search(Resource):
    """
    This class supports search instructors from the instructor list.
    """
    def get(self):
        """
        This method returns instructor search result.
        """
        return {INSTRUCTORS_ROUTE: 'INSTRUCTOR SEARCH RESULT'}


@api.route('/instructors/review')
class Instructors_review(Resource):
    """
    This class supports review an instructor including comments or rating.
    """
    def get(self):
        """
        This method returns new review for the instructor.
        """
        return {INSTRUCTORS_ROUTE: 'INSTRUCTOR REVIEW'}
