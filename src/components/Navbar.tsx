import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import { useAuth } from '../stores/authStore';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">VetCare Faculty</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/appointment" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              Book Appointment
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/vet-dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/vet-login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Vet Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}