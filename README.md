# Notes REST API

A RESTful Notes API built using Node.js, Express.js, MongoDB and Mongoose.

This project allows users to create, retrieve, update and delete notes through REST API endpoints.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Features

- Create a new note
- Retrieve all notes
- Update an existing note
- Delete a note
- Input validation
- MongoDB database integration

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/notes-rest-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd notes-rest-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

5. Start the server:

   ```bash
   node server.js
   ```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/notes` | Create a note |
| GET | `/notes` | Retrieve all notes |
| PATCH | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

## Environment Variables

The application requires the following environment variables:

- `MONGO_URI` – MongoDB connection string.
- `PORT` – Server port.

## Author

Prakash Agrawal
