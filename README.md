# CRUD Node.js with MongoDB

This is a simple CRUD (Create, Read, Update, Delete) project developed with Node.js, Express, and MongoDB.

## Features

- **Create:** Add new sales records.
- **Read:** List all sales records.
- **Update:** Modify information of an existing sales record.
- **Delete:** Remove a sales record.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://github.com/motdotla/dotenv)

## Prerequisites

- Node.js installed
- MongoDB installed and running

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crud-nodejs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd crud-nodejs
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root of the project.
2. Add the following environment variable, replacing it with your MongoDB connection string:
   ```
   MONGO_DB=mongodb://localhost:27017/your-database-name
   ```

## How to Run

To start the server, run the following command:

```bash
node .\index.js --watch
```

The server will be available at `http://localhost:3000`.

## API Endpoints

- `POST /vendas`: Creates a new sales record.
- `GET /vendas`: Returns all sales records.
- `PUT /vendas/:id`: Updates an existing sales record.
- `DELETE /vendas/:id`: Deletes a sales record.
