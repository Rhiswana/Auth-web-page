# 🔐 Authentication Web Application

Live URL:  
👉 https://auth-web-page-3.onrender.com/

This is a full-stack authentication project with **Register, Login, and Dashboard**, built using:

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (Mongoose)  
- **Deployment**: Render (Frontend + Backend)

---

## 📁 Project Structure

Auth_Project/
│
├── Backend/
│ ├── controllers/
│ │ ├── loginController.js
│ │ └── registerController.js
│ │
│ ├── model/
│ │ └── user.js
│ │
│ ├── routes/
│ │ └── authRoutes.js
│ │
│ ├── .env
│ ├── app.js
│ ├── package.json
│ └── node_modules/ (ignored)
│
├── Frontend/
│ ├── index.html (Login Page)
│ ├── login.js
│ ├── login.css
│ │
│ ├── register.html
│ ├── register.js
│ ├── register.css
│ │
│ └── Dashboard.html
│
└── README.md


---

## ✅ Features

- ✅ User Registration
- ✅ User Login
- ✅ Password Hashing using bcrypt
- ✅ MongoDB Database
- ✅ Frontend & Backend Connected
- ✅ Deployed on Render
- ✅ Dashboard Redirect After Login
- ✅ Password Eye Toggle (Show/Hide Password)

---

## ⚙️ Backend Setup (Local)

### 1️⃣ Install Dependencies

```bash
cd Backend
npm install
PORT=3000
MONGODB_URL=your_mongodb_connection_string
NODE_ENV=production

👨‍💻 Technologies Used

Node.js

Express.js

MongoDB

Mongoose

bcrypt

dotenv

cors

HTML

CSS

JavaScript

Render


🙌 Author

Developed by Rhiswana
Full Stack Authentication Project 🚀