# CourXive

## Description

CourXive is a platform that offers *online learning navigation* including course comparison and recommendation. We aim at integrating online courses and study materials from various learning websites. No matter you are a student at school, a professional, or an individual learner, there is no need to look around for your best fit on different learning websites separately.

## Requirements

The **user** should be able to:

*Account*:
1. Sign up with email.
1. Log in with email and password.
1. Log out.
1. Delete account.
1. Edit profile, including education, class standing, experience, and study plan.

*Study plan*:
1. Display and share study progress.
1. Favorite a course.
1. Add a course to wishlist.
1. Add a to-do list.
1. Delete a to-do list.
1. Add a reminder for a to-do list.
1. Delete a reminder for a to-do list.

*Course Database*:
1. Browse course database
1. Receive course recommendations.
1. View course comparisons.
1. Search for a course by title or key words.
1. Filter and explore courses by tags like language, subject, provider, institution, level, pricing, certificate.

*User Interaction*:
1. Update profile.
1. search for a course in course database by title or key words.
1. Like a course.
1. Dislike a course.
1. Rate a course.
1. View course ratings from both CourXive and original provider.
1. Comment on a course.
1. Reply to other comments on a course.
1. Delete comments.
1. Share a course link.
1. Update a to-do list.
1. Update a reminder.

*The **system** should be able to*:

1. Add a new user to database.
1. Support fast searching in course database by key words. 
1. List edit history of a user profile.
1. List a user's to-do lists.
1. Support notifications for reminders.
1. Recommend new courses to users based on user profile, favorites, search history, and learning history.
1. Display summary and outline of a course.
1. Store online course information classified by subjects (computer science, statistics, psychology, arts, etc.) in course database.
1. Collect comments/reviews from users on a course.
1. Update course scores based on user ratings.

*The **system** should be able to*:

1. List all courses.
2. Support course search.
3. Support rate or comment a course.
4. List all subjects.
5. Support subject search,
6. Allow users to submit new subject recommendations.
7. List all instructors.
8. Support instructor search.
9. Support rate or comment a instructor.


*Other requirements*:

1. Everything under source code control.
1. Documentation integrated with code.
1. Project-build automated.
1. Automated testing in place.
1. Automated code checking in place.
1. Test code coverage measured.
1. Automated deployment to production.


## Design

Below is a standard toolkit for this course.

1. Use `git`
1. Use `pydoc`
1. Use `make`
1. Use `unittest`
1. Use `flake8`
1. Use `coverage`
1. Use `Travis`


## Setup

To set up the development environment and make changes, run:

`make dev_env`

In order to build production, in the top-level directory, run:

`make prod`

In order to run the Django project in testing, run:
1. `make first_run` if running the project for the first time.
2. `make run` afterwards.


## Testing

To run tests, simply run: 

`make tests`
