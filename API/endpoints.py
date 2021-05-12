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


@api.route('/courses')
class Courses(Resource):
    """
    This class supports fetching a list of all courses.
    """
    def get(self):
        """
        This method returns all courses.
        """
        return {COURSES_ROUTE: 'COURSES LIST'}


@api.route('/courses/append')
class Courses_append(Resource):
    """
    This class supports append a course to course list.
    """
    def get(self):
        """
        This method returns new course list.
        """
        return {COURSES_ROUTE: 'COURSE APPENDED'}


@api.route('/courses/delete')
class Courses_delete(Resource):
    """
    This class supports delete a course from course list.
    """
    def get(self):
        """
        This method returns new course list.
        """
        return {COURSES_ROUTE: 'COURSE DELETED'}


@api.route('/subjects')
class Subjects(Resource):
    """
    This class supports fetching a list of all subjects.
    """
    def get(self):
        """
        This method returns all subjects.
        """
        return {SUBJECTS_ROUTE: 'SUBJECTS LIST'}


@api.route('/subjects/append')
class Subjects_append(Resource):
    """
    This class supports append a subject to subject list.
    """
    def get(self):
        """
        This method returns new subject list.
        """
        return {SUBJECTS_ROUTE: 'SUBJECT APPENDED'}


@api.route('/subjects/delete')
class Subjects_delete(Resource):
    """
    This class supports delete a subject from subject list.
    """
    def get(self):
        """
        This method returns new subject list.
        """
        return {SUBJECTS_ROUTE: 'SUBJECT DELETED'}


@api.route('/instructors')
class Instructors(Resource):
    """
    This class supports fetching a list of all instructors.
    """
    def get(self):
        """
        This method returns all instructors.
        """
        return {INSTRUCTORS_ROUTE: 'INSTRUCTORS LIST'}


@api.route('/instructors/append')
class Instructors_append(Resource):
    """
    This class supports append an instructor to instructor list.
    """
    def get(self):
        """
        This method returns new instructor list.
        """
        return {INSTRUCTORS_ROUTE: 'INSTRUCTOR APPENDED'}


@api.route('/instructors/delete')
class Instructors_delete(Resource):
    """
    This class supports delete an instructor from instructor list.
    """
    def get(self):
        """
        This method returns new instructor list.
        """
        return {INSTRUCTORS_ROUTE: 'INSTRUCTOR DELETED'}
