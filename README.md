📊 Expense Tracker – MERN Stack Application

A full-stack Expense Management System built using the MERN stack (MongoDB, Express, React, Node.js).
This app helps users manage expenses, income, categories, filters, analytics, and maintains secure authentication.

🚀 Live Demo

Frontend (Netlify):
🔗 https://expensemanagingapp.netlify.app

Backend (Render):
🔗 https://expense-tracker-npgz.onrender.com

📌 Features
👤 User Features

Register & Login (JWT Auth)

Add, Edit, Delete transactions

View income & expenses

Filter by:

Date range

Category

Type (Income / Expense)

Responsive UI Design

Avatar upload / selection

Real-time toast notifications

🛠 Admin Features

Admin login

View all users

Manage all transactions

Admin database control

🛠 Tech Stack
Frontend

React

React Router DOM

Bootstrap / React-Bootstrap

Axios

Datepicker

Toast notifications (React Hot Toast / React Toastify)

Backend

Node.js

Express.js

MongoDB & Mongoose

JWT Authentication

Bcrypt

Helmet

Morgan

📂 Project Structure
Expense_Tracker/
│
├── backend/
│   ├── DB/
│   ├── Models/
│   ├── Routers/
│   ├── Controllers/
│   ├── app.js
│   ├── package.json
│
└── frontend/
    ├── public/
    ├── src/
    ├── package.json

⚙️ Environment Variables

Create a .env file inside backend:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

▶️ How to Run Locally
1. Clone the Repository
git clone https://github.com/ArivazhaganPandiyan/Expense_Tracker.git
cd Expense_Tracker

2. Install & Run Backend
cd backend
npm install
npm start


Backend runs at:
➡ http://localhost:5000

3. Install & Run Frontend
cd frontend
npm install
npm start


Frontend runs at:
➡ http://localhost:3000

🌐 Deployment
Netlify (Frontend)

Build command:

npm run build


Deploy the build/ folder

Render (Backend)

Root Directory: backend

Build Command: npm install

Start Command: node app.js

Auto-deploy enabled

🖼 Screenshots

(Add your screenshots here)
