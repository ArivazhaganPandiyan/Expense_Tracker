# 📊 Expense Tracker – MERN Stack Application

A full-stack **Expense Management System** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
This app helps users track income, expenses, categories, analytics, and manage their financial activity with secure authentication.

---

## 🚀 Live Demo

### 🌐 Frontend (Netlify)
https://expensemanagingapp.netlify.app

### 🖥 Backend (Render)
https://expense-tracker-npgz.onrender.com

---

## 📌 Features

### 👤 User Features
- Register & Login (JWT Authentication)
- Add, Edit, Delete transactions
- Track both **Income & Expense**
- Filter by:
  - Date range  
  - Category  
  - Transaction Type  
- Clean & responsive UI
- Avatar  selection
- Toast notifications for actions

## 🛠 Tech Stack

### **Frontend**

-React (CRA)
-React Router DOM – Client-side navigation
-Axios – API requests
-Bootstrap / React-Bootstrap – UI components & grid
-Material UI (MUI) – Icons & components
-custom css
-React Hot Toast / React Toastify – Notifications
-React Datepicker / React Date Range – Date selection
-Moment.js – Date formatting
-tsparticles / react-tsparticles – Background animations
-Unique Names Generator – Random unique names

### **Backend**

-Express.js
-MongoDB & Mongoose – Database & ODM
-JWT (jsonwebtoken) – Authentication
-Bcrypt – Password hashing
-Cookie-Parser – Cookie handling
-CORS – Cross-origin access
-Dotenv – Environment variables
-Helmet – Security headers
-Morgan – API request logging
-Validator – Input validation

---

## ▶️ Running the App Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ArivazhaganPandiyan/Expense_Tracker.git
cd Expense_Tracker
cd backend
## ⚙️ Environment Variables (Backend)

Create a `.env` file inside **backend**:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
2️⃣ Run Backend
cd backend
npm install
npm start
3️⃣ Run Frontend
cd frontend
npm install
npm run dev

🖼 Screenshots
<img width="1920" height="1080" alt="Screenshot (1)" src="https://github.com/user-attachments/assets/5aee5678-5bdb-4ccc-b676-eacc1fd786ee" />
<img width="1920" height="1080" alt="Screenshot (2)" src="https://github.com/user-attachments/assets/5078ecd3-c4c8-4f89-80e0-2531cd9e32da" />

