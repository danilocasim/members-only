# Inventory Application
An application that stores my to-be-read books, it's built using PostgreSQL, Express, EJS, Node.js
- [Live Preview](https://members-only-k4y7.onrender.com/)

## Features
- Login authentication using Passport.js Local Strategy
- Register a user by hashing their password
- For a non-authenticated user
  - View all posts but not the author
- For an authenticated user
  - View all posts but not the author
  - Create a post
  - Can join the club using the pass key
- For an authenticated user and a member
  - View all posts and the author
  - Create a post
- For an admin user
  - All features
  - Can delete a post

## Learnings
- MVC architecture using controllers, views
- Routing with Express
- EJS templating
- Validating data from server-side using express-validator
- Connecting and querying PostgreSQL
- Populating the database using a script
- Environment Variable to keep the data safe
- Authenticate by matching the admin password and membership key stored in .env using express-validator
- Authenticate using passport.js through local strategy
- Sign up by hashing the password using bcryptjs

## Technologies
- Backend: Node.js, Express
- Frontend: EJS Templates, HTML, CSS
- Database: PostgreSQL
- Authentication: Passport.js

## Initial Design
<img width="927" height="496" alt="image" src="https://github.com/user-attachments/assets/d2f969f1-b8d2-4b22-ab83-781e17388b78" />


