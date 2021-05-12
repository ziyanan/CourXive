
"""
This runs tests for endpoints.py.
"""
import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)

from unittest import TestCase
from flask_restx import Resource

from endpoints import HelloWorld, HELLO, AVAILABLE, Endpoints
from endpoints import Courses, Courses_search, Courses_review, COURSES_ROUTE
from endpoints import Subjects, Subjects_search, SUBJECTS_ROUTE
from endpoints import Instructors, Instructors_search, Instructors_review, INSTRUCTORS_ROUTE

class TestEndpoints(TestCase):
    def test_hello(self):
        """
        Test our "hello" endpoint.
        """
        hello_ep = HelloWorld(Resource)
        ret = hello_ep.get()
        self.assertIn(HELLO, ret)

    def test_endpoints(self):
        """
        Test our "endpoints" endpoint.
        """
        epts = Endpoints(Resource)
        ret = epts.get()
        self.assertIn(AVAILABLE, ret)


    def test_courses(self):
        """
        Test our "Courses" (list courses) endpoint.
        """
        courses = Courses(Resource)
        ret = courses.get()
        self.assertIsInstance(ret, dict)

    def test_courses_search(self):
        """
        Test our "Courses_search" endpoint.
        """
        courses_search = Courses_search(Resource)
        ret = courses_search.get()
        self.assertIsInstance(ret, dict)

    def test_courses_review(self):
        """
        Test our "Courses_review" endpoint.
        """
        courses_review = Courses_review(Resource)
        ret = courses_review.get()
        self.assertIsInstance(ret, dict)



    def test_subjects(self):
        """
        Test our "Subjects" (list subjects) endpoint.
        """
        subjects = Subjects(Resource)
        ret = subjects.get()
        self.assertIsInstance(ret, dict)

    def test_subjects_search(self):
        """
        Test our "Subjects_search" endpoint.
        """
        subjects_search = Subjects_search(Resource)
        ret = subjects_search.get()
        self.assertIsInstance(ret, dict)



    def test_instructors(self):
        """
        Test our "Instructors" (list instructors) endpoint.
        """
        instructors = Instructors(Resource)
        ret = instructors.get()
        self.assertIsInstance(ret, dict)

    def test_instructors_search(self):
        """
        Test our "Instructors_search" endpoint.
        """
        instructors_search = Instructors_search(Resource)
        ret = instructors_search.get()
        self.assertIsInstance(ret, dict)

    def test_instructors_review(self):
        """
        Test our "Instructors_review" endpoint.
        """
        instructors_review = Instructors_review(Resource)
        ret = instructors_review.get()
        self.assertIsInstance(ret, dict)

