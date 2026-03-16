
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Auth pages
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'

// Admin pages
import AdminDashboard from './Pages/Admin/AdminDashboard'
import ManageDoctors from './Pages/Admin/ManageDoctors'
import ManagePatients from './Pages/Admin/ManagePatients'
import ManageAppointments from './Pages/Admin/ManageAppointments'

// Doctor pages
import DoctorDashboard from './Pages/Doctor/DoctorDashboard'
import DoctorAppointment from './Pages/Doctor/DoctorAppointment'
import PatientHistory from './Pages/Doctor/PatientHistory'
import AddPrescription from './Pages/Doctor/AddPrescription'

// Patient pages
import PatientDashboard from './Pages/Patient/PatientDashboard'
import BookAppointment from './Pages/Patient/BookAppointment'
import MyAppointment from './Pages/Patient/MyAppointment'
import MedicalHistory from './Pages/Patient/MedicalHistory'

// Calendar
import Appointments from './Pages/Calender/Appointments'

function App() {

  const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Login /> 
  },
  { 
    path: "/register", 
    element: <Register /> 
  },

  // Admin routes
  { 
    path: "/admin", 
    element: <AdminDashboard /> 
  },
  { 
    path: "/admin/doctors", 
    element: <ManageDoctors /> 
  },
  { 
    path: "/admin/patients", 
    element: <ManagePatients /> 
  },
  { 
    path: "/admin/appointments", 
    element: <ManageAppointments /> 
  },

  // Doctor routes
  { 
    path: "/doctor", 
    element: <DoctorDashboard /> 
  },
  { 
    path: "/doctor/appointments", 
    element: <DoctorAppointment /> 
  },
  { 
    path: "/doctor/history", 
    element: <PatientHistory /> 
  },
  { 
    path: "/doctor/prescription", 
    element: <AddPrescription /> 
  },

  // Patient routes
  { 
    path: "/patient", 
    element: <PatientDashboard /> 
  },
  { 
    path: "/patient/book", 
    element: <BookAppointment /> 
  },
  { 
    path: "/patient/myappointments", 
    element: <MyAppointment /> 
  },
  { 
    path: "/patient/history", 
    element: <MedicalHistory /> 
  },

  // Calendar
  { 
    path: "/calendar", 
    element: <Appointments /> 
  }
]);

  return  <RouterProvider router={router} />
}

export default App