# ☁️ Storixa

Storixa is a secure cloud file storage platform developed using the MERN Stack. The application enables users to securely register, authenticate, upload, manage, search, download, and delete files through an intuitive web interface. Each user's data is protected through JWT-based authentication, ensuring private and secure file management.

---

## 🚀 Features

- Secure user registration and login
- JWT-based authentication and protected routes
- Secure file upload and storage
- Personal dashboard with live statistics
- Search uploaded files instantly
- Download files securely
- Delete files permanently
- Individual "My Files" management
- User profile page
- Storage usage tracking
- Multi-user file isolation
- Responsive and modern user interface

---

## 🛠️ Technology Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React Icons

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- Multer
- Bcrypt

---

## 📂 Project Structure

```
Storixa
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Storixa.git
```

### Install Frontend Dependencies

```bash
cd client
npm install
npm run dev
```

### Install Backend Dependencies

```bash
cd server
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **server** directory and configure the following variables:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

---

## 📸 Application Preview

The application includes the following pages:

- Landing Page
- Login
- Register
- Dashboard
- My Files
- Profile

> Screenshots will be added after deployment.

---

## 🔒 Security

Storixa follows secure authentication and authorization practices by implementing:

- Password hashing using Bcrypt
- JWT Authentication
- Protected API routes
- User-specific file access
- Secure file management

---

## 🔮 Future Enhancements

- Cloud storage integration (AWS S3 / Cloudinary)
- File sharing using secure links
- Favorite files
- Trash and restore functionality
- Drag-and-drop uploads
- Dark/Light theme support
- Email verification
- Password reset

---

## 👨‍💻 Developer

**Om Satya**

Final Year Computer Science Engineering Student

Built with dedication using the MERN Stack.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.