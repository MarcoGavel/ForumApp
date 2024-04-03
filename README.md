# ForumApp
A basic Forum app
![image](https://github.com/MarcoGavel/ForumApp/assets/156299795/b0611ddb-9c4b-4ded-bd28-74033483f250)

Summary:

This project is a basic web application built using Node.js and Express.js. It allows users to create, view, edit, and delete posts on a forum. The application uses EJS (Embedded JavaScript) for rendering views and Bootstrap for styling.

Functionality:

Users can create new posts, view all existing posts, edit existing posts, and delete posts as needed.
The application consists of several routes:
GET '/' renders the homepage, displaying all existing posts.
GET '/create_post' renders the page for creating a new post.
POST '/create_post' handles the creation of a new post.
GET '/edit_post/:id' renders the page for editing an existing post.
POST '/edit_post/:id' handles the editing of an existing post.
GET '/delete_post/:id' handles the deletion of an existing post.
Each page utilizes EJS templates for dynamic content rendering.
Components:

app.js:

Initializes the Express application.
Configures routes and middleware.
Manages post creation, editing, and deletion.
Views (EJS Templates):

index.ejs: Renders the homepage, displaying all posts.
create_post.ejs: Renders the page for creating a new post.
edit_post.ejs: Renders the page for editing an existing post.
layout.ejs: Shared layout template containing common elements across all views.
Usage:

Users can navigate between pages using provided links.
They can interact with the application to create, view, edit, and delete posts according to their requirements.
GitHub Repository:

Link: GitHub Repository
Feel free to explore the repository for more details and the full code implementation.
