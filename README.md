# 🌲 YelpCamp

> A full-stack campground review platform built with Node.js, Express, and MongoDB.

<img width="1495" height="773" alt="image" src="https://github.com/user-attachments/assets/6d532b68-41fc-4805-a766-39b34a6b5681" />


---

## 📌 Overview

YelpCamp is a full-stack web application that allows users to:

- Discover campgrounds
- Create and manage their own campgrounds
- Leave reviews
- View campgrounds on an interactive map

This project was built as a capstone application after completing Colt Steele’s Web Developer Bootcamp. It demonstrates end-to-end web development using a modern Node.js stack.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User registration and login
- Secure password hashing using bcrypt
- Session-based authentication
- Route-level authorization
- Flash messaging for user feedback

### 🏕 Campground Management
- Create, edit, and delete campgrounds
- Upload and manage images via Cloudinary
- Image storage and deletion handling
- Server-side validation using Joi

### ⭐ Reviews System
- Add and delete reviews
- One-to-many relational modeling with MongoDB
- Authorization protection for review management

### 🗺 Map Integration
- Geocoding using MapTiler API
- Interactive map display for each campground

### 🛡 Security Features
- Helmet.js for securing HTTP headers
- MongoDB sanitization against injection attacks
- Secure express-session configuration
- Environment variable protection
- Centralized error handling

---

## 🏗 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (templating engine)

### Authentication & Security
- Passport.js
- bcrypt
- express-session
- connect-flash
- Helmet
- Joi

### APIs & Cloud Services
- Cloudinary (image storage)
- MapTiler (geocoding and maps)

---

## 📂 Project Architecture

The application follows an MVC-style structure:

```
YelpCamp/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
└── app.js
```


**Models** → MongoDB schemas  
**Controllers** → Route Handlers  
**Routes** → Route definitions & middleware chains  
**Views** → EJS templates  
**Public** → Static assets  
**app.js** → Main application entry point  

---

## ⚙ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/YelpCamp.git
cd YelpCamp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file in the root directory

```bash
DATABASE_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAPTILER_API_KEY=your_maptiler_key
```

### 4. Run the application

```bash
node app.js
```
---

## 🧠 What This Project Demonstrates

- RESTful routing principles  
- Middleware-based architecture  
- Authentication and authorization flows  
- Relational modeling with MongoDB  
- Secure environment variable management  
- Third-party API integration  
- Production-oriented security practices  

---

## 📈 Future Improvements

- User profile pages  
- CI/CD deployment pipeline  
- Unit and integration testing  

---

## 📜 Acknowledgment

This project was built after completing Colt Steele’s Web Developer Bootcamp.  
It represents my own implementation of the concepts and architecture taught in the course.
