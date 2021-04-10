# CourXive

## Description

Courvie is a platform that offers *online learning navigation* for online courses' comparisons and recommendations. We aim at helping integrating studying materials and online courses through various learning websites. No matter you are a student at school, a professional employee, or an individual learning lover, there is no need to worry about looking around for learning websites separately.

## Requirements

The **user** should be able to:

1. The user can create a new account
2. The user can edit their profile, including but not limited to: their study plan, educational background, experience, and knowledge level
3. The user can delete their profile
4. The user can share their study progress
5. The user can favorite a course and add a course to their wishlist
7. The user can browse the course database
8. The user can user can comment under a course and review the course
9. The user can get course recommendations
10. The user can view courses comparisons 
11. The user can search correlated resources by key words

The **system** should be able to:

1. The system can add a new user to database
2. The system can save an edit to a user profile
3. The system can recommend new courses to a user based on (but not limited to) their study plan, educational background, experience, and knowledge level
4. The system can summarize and display the course material
5. The system's database can contain online courses information for subjects such as computer science, statistics, psychology, and arts
6. The system can make study plan for a user
7. The system can receive comments/reviews from users for courses
8. The system can provide comparisons between online courses 
9. The system can provide search engine by key words

Other requirements are:

1. Everything under source code control
2. Documentation integrated with code.
3. Project build automated.
4. Automated testing in place.
5. Automated code checking in place.
6. Test code coverage measured.
7. Automated deployment to production

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
2. Use `pydoc`
3. Use `make`
4. Use `unittest`
5. Use `flake8`
6. Use `coverage`
7. Use `Travis`

## Testing

To test, simply run: 

`make tests`
