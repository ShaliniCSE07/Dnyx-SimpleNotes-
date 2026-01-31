# SimpleNotes API

A lightweight backend API for managing personal notes, built as part of my internship task. This project demonstrates CRUD (Create, Read, Update, Delete) operations using the MERN stack (Node.js, Express, MongoDB).

##  Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Deployment:** Vercel

##  Features
- **Create Notes:** Title and Description validation (must not be empty).
- **Read Notes:** Fetch all notes sorted by the latest creation date.
- **Update Notes:** Edit existing notes via their unique ID.
- **Delete Notes:** Remove notes from the permanent database.
- **Persistence:** All data is stored securely in MongoDB Atlas.

##  API Endpoints

| Method | Endpoint | Description |
| **GET** | `/notes` | Fetch all notes from the database |
| **POST** | `/notes` | Create a new note (requires title & description) |
| **PUT** | `/notes/:id` | Update an existing note by ID |
| **DELETE** | `/notes/:id` | Delete a note by ID |

### Example Request Body (POST/PUT)
```json
{
  "title": "Internship Task",
  "description": "Complete the backend CRUD challenge."
}
```
### Github Repository
https://github.com/ShaliniCSE07/Dnyx-SimpleNotes-.git

### Live Demo
Hosted API- https://dnyx-simple-notes-new.vercel.app/
