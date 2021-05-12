
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
from endpoints import Courses, COURSES_ROUTE


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
        Test our "courses" endpoint.
        """
        courses = Courses(Resource)
        ret = courses.get()
        self.assertIn(COURSES_ROUTE, ret)
        # self.assertIsInstance(COURSES_ROUTE, dict)
        # we expect more than one game type!
        # self.assertGreater(len(ret), 1)
