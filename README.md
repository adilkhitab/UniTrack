# UniTrack

A full-stack MERN University Student Management System designed to manage student information and academic records through a simple web interface.

## 🌐 Live Demo

Frontend: https://unitrack-1-e6hn.onrender.com

Backend API: https://unitrack-gfe8.onrender.com

## 📌 About the Project

UniTrack is a university student management system developed as a full-stack web development project.

The system provides a student-focused interface where users can create an account, log in, and access different sections related to their academic information.

The project uses the MERN stack and includes a React frontend, Node.js and Express backend, and MongoDB database.

## ✨ Features

- Student Signup
- Student Login
- Protected Dashboard
- Student Profile
- Subjects / Courses
- Attendance
- Exam Results
- Fee Status
- Timetable
- Logout
- REST API
- MongoDB database integration
- User authentication
- Responsive and styled web interface
- Live deployment

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- React Router
- CSS

### Backend
- Node.js
- Express.js
- REST API
- CORS
- bcrypt

### Database
- MongoDB
- MongoDB Atlas

### Tools & Deployment
- Git
- GitHub
- Render

## 📂 Project Structure

```text
UniTrack/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── package.json
└── README.md
🔐 Authentication

The system includes student registration and login functionality.

Passwords are handled on the backend using bcrypt, while authentication requests are processed through the Express API.

🔄 How It Works
React Frontend
       ↓
Express REST API
       ↓
Node.js Backend
       ↓
MongoDB Atlas

The frontend sends requests to the backend API. The backend processes the requests and communicates with MongoDB Atlas to store and retrieve student data.

🚀 Running the Project Locally
1. Clone the repository
git clone https://github.com/adilkhitab/UniTrack.git
2. Open the project
cd UniTrack
3. Install backend dependencies
cd backend
npm install

Create a .env file inside the backend folder and add your MongoDB connection string:

MONGO_URI=your_mongodb_connection_string

Start the backend:

node server.js
4. Run the frontend

Open another terminal:

cd frontend
npm install
npm run dev

Then open the local URL provided by Vite in your browser.

☁️ Deployment

The project is deployed using Render.

Frontend: Render Static Site
Backend: Render Web Service
Database: MongoDB Atlas
Source Code: GitHub
👨‍💻 Developer

Adil Khitab

GitHub: https://github.com/adilkhitab

📄 Project Purpose

UniTrack was developed as a full-stack web development project to demonstrate the practical use of frontend development, backend APIs, database integration, authentication, version control, and cloud deployment.


