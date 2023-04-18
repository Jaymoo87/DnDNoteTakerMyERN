# DnD Note Taker App

This is a DnD-themed note-taking app that allows users to create and save notes for their DnD campaigns.

## Features

The app has the following features:

- Note creation: Users can create new notes by entering a title and content for the note.
- Note saving: Users can save their notes to the app's PostgreSQL database.
- Note retrieval: Users can retrieve their saved notes from the app's PostgreSQL database.
- Note deletion: Users can delete their saved notes from the app's PostgreSQL database.
- User registration: Users can register for an account to use the app.
- User authentication: Users must log in to their account to use the app.
- User-friendly interface: The app has a simple and intuitive interface that makes it easy for users to use.

## Stack

The app uses the following stack:

- **Front-end**: React, CSS, JavaScript, and TailwindCss framework.
- **Back-end**: Node.js, Express.js, and PostgreSQL database.

## Database

The app has two tables in its PostgreSQL database:

- `notes` table: This table has the following columns:
  - `id` (integer): The unique ID of the note.
  - `title` (string): The title of the note.
  - `content` (string): The content of the note.
  - `user_id` (integer): The ID of the user who created the note.
- `users` table: This table has the following columns:
  - `id` (integer): The unique ID of the user.
  - `username` (string): The username of the user.
  - `password` (string): The hashed password of the user.

## Structure

The app is structured as follows:

- `client/`: This directory contains the front-end code for the app.
- `server/`: This directory contains the back-end code for the app.
- `package.json`: This file contains the app's dependencies and other metadata.

## Authentication

The app uses a basic form of authentication, where users are required to provide their username and password to log in to their account. Passwords are hashed using the bcrypt library to ensure security.

## How to Use

To use the app, first clone the repository to your local machine. Then, navigate to your root directory and run `npm install` to install the app's dependencies. After that, you need to set up a PostgreSQL database with the name `dnd_notes` and two tables: `notes` and `users` with their respective columns as described above.

```sql
    CREATE TABLE users (
id CHAR(36) PRIMARY KEY,
email VARCHAR(60) NOT NULL UNIQUE,
password VARCHAR(60) NOT NULL,
first_name VARCHAR(60) NOT NULL,
last_name VARCHAR(60) NOT NULL,
created_at DATE DEFAULT NOW()
);

CREATE TABLE notes (
id CHAR(36) PRIMARY KEY,
userid CHAR(36) NOT NULL,
body VARCHAR(2000) NOT NULL,
created_at DATE DEFAULT NOW(),
FOREIGN KEY (userid) REFERENCES users (id)
);
```

You can then run `npm start` to start the app's server.

Once the server is running, open your web browser and navigate to `http://localhost:3000` to access the app. From there, you can register for an account, log in, create, save, retrieve, and delete your notes.

## Contributing

If you would like to contribute to the app, feel free to fork the repository and submit a pull request. Any contributions are welcome!
