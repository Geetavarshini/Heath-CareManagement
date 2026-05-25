# Health Care Management System

A full stack MERN-based Health Care Management System developed to digitize and simplify hospital operations. This application enables secure healthcare management through patient handling, doctor management, appointment scheduling, authentication, and dashboard-based workflows.

The primary goal of this project was to understand how real-world healthcare systems are designed, connected, secured, and managed using modern full stack technologies.

---

# Project Overview

The Health Care Management System is designed to streamline hospital and clinic operations digitally.

The application provides:

### PATIENT
- Register and login
- View doctors
- Book appointments
- Access healthcare services

### DOCTOR
- Manage appointments
- Handle patient-related workflows
- Maintain healthcare information

### SYSTEM / ADMIN
- Authentication handling
- Dashboard management
- Data management
- Healthcare workflow monitoring

Core modules include:

- Authentication & Authorization
- Patient Management
- Doctor Management
- Appointment Booking
- Dashboard System
- REST API Integration
- Protected Routes
- Responsive UI
- Secure Backend Processing

---

# Repository Structure

```plaintext
Health-CareManagement/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── Services/
│   │   ├── Context/
│   │   ├── Routes/
│   │   ├── Assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── APIs/
│   ├── Models/
│   ├── Middlewares/
│   ├── Services/
│   ├── database/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Bootstrap / CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- CORS

---

# Features

- Secure User Authentication
- JWT Authorization
- Protected Routes
- Patient Management
- Doctor Management
- Appointment Booking System
- Dashboard System
- CRUD Operations
- REST API Architecture
- Responsive User Interface
- Backend Validation
- Secure API Communication

---

# API Modules

| API | Purpose |
|------|---------|
| Auth API | Registration, Login, Logout |
| Doctor API | Doctor CRUD and listing |
| Patient API | Patient handling |
| Appointment API | Appointment booking and cancellation |

---

# Frontend Routes

| Route | Purpose |
|------|---------|
| `/` | Home Page |
| `/login` | Login |
| `/register` | Registration |
| `/dashboard` | Dashboard |
| `/appointments` | Appointment Management |
| `/doctors` | Doctor Listing |

---

# Backend Routes

## Authentication

| Method | Endpoint | Purpose |
|------|------|---------|
| POST | `/register` | Register user |
| POST | `/login` | Login |
| GET | `/logout` | Logout |

## Doctor APIs

| Method | Endpoint | Purpose |
|------|------|---------|
| GET | `/doctors` | Fetch doctors |
| POST | `/doctors` | Add doctor |
| PUT | `/doctors/:id` | Update doctor |
| DELETE | `/doctors/:id` | Delete doctor |

## Appointment APIs

| Method | Endpoint | Purpose |
|------|------|---------|
| POST | `/appointments` | Book appointment |
| GET | `/appointments` | Fetch appointments |
| DELETE | `/appointments/:id` | Cancel appointment |

---

# Database Models

## Doctor Model
Stores:
- Name
- Specialization
- Experience
- Availability
- Contact Details

## Patient Model
Stores:
- Name
- Email
- Contact Details
- Medical Information

## Appointment Model
Stores:
- Appointment Date
- Doctor Details
- Patient Details
- Status

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Geetavarshini/Heath-CareManagement.git
```

## Navigate

```bash
cd Heath-CareManagement
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Backend Setup

```bash
cd backend
npm install
npm start
```

or

```bash
nodemon server.js
```

---

# Authentication & Security

Security features include:

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Environment Variable Security
- Secure API Communication

---

# Frontend & Backend Communication

Frontend communicates with backend using REST APIs via Axios.

Includes:

- API Requests
- Dynamic Rendering
- Token Handling
- Validation
- Error Handling

---

# Performance Optimizations

- Modular Architecture
- Reusable Components
- Efficient Database Queries
- Lightweight Rendering
- Fast Development using Vite

---

# Future Enhancements

- Online Payments
- Video Consultation
- Real-Time Notifications
- Medical Report Uploads
- AI-Based Health Suggestions
- Dark Mode

---

# What I Learned

- Full Stack MERN Development
- REST API Design
- Authentication & Authorization
- MongoDB Schema Design
- Frontend + Backend Integration
- Secure Route Handling
- Deployment & Debugging
- Real-World Project Architecture

--

Developed by Team-30  
B.Tech – Anurag University
