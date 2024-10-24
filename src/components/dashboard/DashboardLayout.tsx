import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Users, ClipboardList } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: '/vet-dashboard', icon: Calendar, label: 'Appointments' },
    { path: '/vet-dashboard/patients', icon: Users, label: 'Patients' },
    { path: '/vet-dashboard/records', icon: ClipboardList, label: 'Records' },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="w-64 bg-white border-r border-gray-200">
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto bg-gray-50 p-6">{children}</main>
    </div>
  );
}