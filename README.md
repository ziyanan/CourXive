# CourXive

## Description

Courvie is a platform that offers *online learning navigation* for online courses' comparisons and recommendations. We aim at helping integrating studying materials and online courses through various learning websites. No matter you are a student at school, a professional employee, or an individual learning lover, there is no need to worry about looking around for learning websites separately.

## Requirements

The **user** should be able to:

*Accounts*:
1. Sign up with their email.
1. Login to their personal account with email/username and password.
1. Login out.
1. Delete their personal account.
1. Edit their profile, including educational background, experience, and study plan.

*Study plan*:
1. Display and share study progress.
1. Favorite a course.
2. Add a course to wishlist.
3. Add eduaction and class standing on personal profile.
4. Delete eduction and class standing on personal profile.
5. Add a to-do list.
6. Delete the to-do list.
7. Add a reminder for the to-do list.
8. Delete the reminder for the to-do list.

*Course Database*:
1. Browse the course database
1. Receive course recommendations.
1. View course comparisons.
1. Search for courses by titles or key words.
1. Explore courses by tags.
1. Filter courses by tags, such as language, category, provider, institution, level, pricing, certificate.

*User Interaction*:
1. Like a course.
1. Dislike a course.
1. Rate a course.
1. View course ratings on both our website and from its original platform.
1. Comment a course.
1. Reply to other comments.
1. Delete comments made by the same account.
1. Share the link to a course.
1. Key word search for the entire database.

*The **system** should be able to*:

1. Add a new user to the database.
2. Support fast searching of the course database based on key words.
3. Update user profiles.
4. List editting history of a user profile
5. Update users' to-do list.
6. List users' to-do list.
7. Update users' reminders.
8. List users' reminders.
9. Recommend new courses to a user based on their study plan, educational background, experience, etc.
10. Display the summary/outline of a course.
11. Store online courses information for subjects - such as computer science, statistics, psychology, and arts - in course database.
12. Create a study plan for a user.
13. Collect comments/reviews from users for courses.
14. Provide comparisons between online courses.
15. Provide a key-word-based search engine.

*Other requirements*:

1. Everything under source code control.
1. Documentation integrated with code.
1. Project-build automated.
1. Automated testing in place.
1. Automated code checking in place.
1. Test code coverage measured.
1. Automated deployment to production.

## Setup

To setup the dev environment and make changes, run:

`make dev_env`

In order to build production, in the top level directory, run:

`make prod`

## Design

The following is a standard toolkit for this course. You *may* use other tools,
but our ability to help you master them will not be as high as with the
standard tools.

1. Use `git`
1. Use `pydoc`
1. Use `make`
1. Use `unittest`
1. Use `flake8`
1. Use `coverage`
1. Use `Travis`

## Testing

To test, simply run: 

`make tests`
