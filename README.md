# CourXive

## Description

Courvie is a platform that offers *online learning navigation* for online courses' comparisons and recommendations. We aim at helping integrating studying materials and online courses through various learning websites. No matter you are a student at school, a professional employee, or an individual learning lover, there is no need to worry about looking around for learning websites separately.

## Requirements

The **user** should be able to:

*Accounts*:
1. Sign up with email or username and password.
1. Login to the personal account with email or username and password.
1. Login out the personal account.
1. Delete the personal account.
1. Edit personal profile information, including but not limited to: their study plan, educational background, experience, and knowledge level.

*Study plan*:
1. Share study progress.
1. Favorite a course.
2. Add a course to wishlist.
3. Add grade level and degree paths on personal profile.
4. Delete grade level and degree paths on personal profile.
5. Add personal To Do list on personal profile.
6. Delete personal To Do list on personal profile.
7. Add reminder of To Do list.
8. Delete reminder of To Do list.

*Course Database*:
1. Browse the course database
1. Receive course recommendations.
1. View courses comparisons.
1. Search for targeted contents(online learning courses) by key words.
1. Explore courses by tags.
1. Filter the courses by one or more tags like languages, category, providers, institutions, level, pricing, certificate.

*User Interaction*:
1. Like a course.
1. Dislike a course.
1. Rate a course in website.
1. View the rate/stars of a course of its original website and view others users’ rate.
1. Comment a course.
1. Comment on other comments.
1. Delete comments made by the same account.
1. Share the link of the content.

*The **system** should be able to*:

1. Add a new user to database
3. Update edit to a user profile
4. List edit to a user profile
5. Update users' personal To Do list.
6. List users' personal To Do list.
7. Update users' reminder of To Do list.
8. List users' reminder of To Do list.
9. Recommend new courses to a user based on (but not limited to) their study plan, educational background, experience, and knowledge level
10. Summarize and display the course material
11. Store online courses information for subjects - such as computer science, statistics, psychology, and arts - in course database
12. Create study plan for a user.
13. Collect comments/reviews from users for courses
14. Provide comparisons between online courses 
15. Provide search engine by key words


*Other requirements*:

1. Everything under source code control
1. Documentation integrated with code.
1. Project build automated.
1. Automated testing in place.
1. Automated code checking in place.
1. Test code coverage measured.
1. Automated deployment to production

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
