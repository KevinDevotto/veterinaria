import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import AppointmentList from '../components/dashboard/AppointmentList';
import PatientRecords from '../components/dashboard/PatientRecords';
import MedicalRecordForm from '../components/dashboard/MedicalRecordForm';

export default function VetDashboard() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<AppointmentList />} />
        <Route path="/patients" element={<PatientRecords />} />
        <Route path="/record/:id" element={<MedicalRecordForm />} />
      </Routes>
    </DashboardLayout>
  );
}