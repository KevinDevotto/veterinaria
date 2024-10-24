import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PatientHistory from './PatientHistory';

// Mock data - In a real app, this would come from an API
const patients = [
  {
    id: 1,
    petName: 'Max',
    petType: 'Dog',
    breed: 'Golden Retriever',
    ownerName: 'John Doe',
    lastVisit: '2024-03-01',
    history: [
      {
        date: '2024-03-01',
        diagnosis: 'Annual checkup',
        treatment: 'Vaccinations updated',
        notes: 'Healthy condition',
      },
      {
        date: '2023-09-15',
        diagnosis: 'Mild skin irritation',
        treatment: 'Prescribed antihistamines',
        notes: 'Follow-up in 2 weeks',
      },
    ],
  },
  {
    id: 2,
    petName: 'Luna',
    petType: 'Cat',
    breed: 'Persian',
    ownerName: 'Jane Smith',
    lastVisit: '2024-02-28',
    history: [
      {
        date: '2024-02-28',
        diagnosis: 'Dental cleaning',
        treatment: 'Professional cleaning performed',
        notes: 'Minor gingivitis noted',
      },
    ],
  },
];

export default function PatientRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<typeof patients[0] | null>(null);
  const navigate = useNavigate();

  const filteredPatients = patients.filter((patient) =>
    patient.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.ownerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddRecord = (patientId: number) => {
    navigate(`/vet-dashboard/record/${patientId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Patient Records</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pet Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Breed
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Owner
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Visit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {patient.petName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {patient.petType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {patient.breed}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {patient.ownerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {patient.lastVisit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm space-x-4">
                  <button
                    onClick={() => setSelectedPatient(patient)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    View History
                  </button>
                  <button
                    onClick={() => handleAddRecord(patient.id)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Add Record
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPatient && (
        <PatientHistory
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}