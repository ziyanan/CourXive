# CourXive

## Description

Courvie is a platform that offers *online learning navigation* for online courses' comparisons and recommendations. We aim at helping integrating studying materials and online courses through various learning websites. No matter you are a student at school, a professional employee, or an individual learning lover, there is no need to worry about looking around for learning websites separately.

## Requirements

The **user** should be able to:

Accounts:
1. The user can sign up with email or username and a password.
2. The user can login in to the personal account with email or username and a password.
3. The user can login out the personal account.
4. The user can delete the personal account.
5. The user can edit personal profile information, including but not limited to: their study plan, educational background, experience, and knowledge level

Study plan:
1. The user can share their study progress
2. The user can favorite a course and add a course to their wishlist
3. The user can add/delete grade level and interested paths on personal profile.
4. The user can add/delete personal To Do list on personal profile.
5. The user can add/delete reminder of To Do list.
6. The user can add/delete customized lists for storing contents.

Course Database:
1. The user can browse the course database
2. The user can get course recommendations
3. The user can view courses comparisons 
4. The user can search the targeted contents(online learning courses) by key words.
5. The user can explore contents by tags.
6. The user can filter the content by one or more tags like languages, category, providers, institutions, level, pricing, certificate.
7. The user can explore contents by website recommendation. 

User Interaction:
1. The user can like/dislike the content.
2. The user can rate the content in website.
3. The user can view the rate/stars of the content of its original website and view others users’ rate.
4. The user can choose to favorite / stop favorite the content into.
5. The user can edit favorite list from personal profile.
6. The user can comment the content.
7. The user can comment on other users’ comments.
8. The user can delete comments.
9. The user can forward the link of the content.

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
