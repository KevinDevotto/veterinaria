import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AppointmentForm from './pages/AppointmentForm';
import VetLogin from './pages/VetLogin';
import VetDashboard from './pages/VetDashboard';
import { useAuth } from './stores/authStore';

function App() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="/vet-login" element={<VetLogin />} />
            <Route
              path="/vet-dashboard/*"
              element={isAuthenticated ? <VetDashboard /> : <VetLogin />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;