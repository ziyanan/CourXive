import unittest

class TestGreeting(unittest.TestCase):
    def test_default_greeting_set(self):
        greeting = 'Hello world!'
        self.assertEqual(greeting, 'Hello world!')

if __name__ == '__main__':
    unittest.main()
