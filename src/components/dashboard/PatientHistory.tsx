import React from 'react';
import { X } from 'lucide-react';

interface PatientHistoryProps {
  patient: {
    id: number;
    petName: string;
    petType: string;
    breed: string;
    ownerName: string;
    history: Array<{
      date: string;
      diagnosis: string;
      treatment: string;
      notes: string;
    }>;
  };
  onClose: () => void;
}

export default function PatientHistory({ patient, onClose }: PatientHistoryProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full mx-4 max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <h2 className="text-xl font-semibold">Medical History</h2>
            <p className="text-sm text-gray-600">
              {patient.petName} ({patient.petType} - {patient.breed})
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto flex-grow">
          <div className="space-y-6">
            {patient.history.map((record, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 space-y-3 hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-blue-600">{record.date}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Diagnosis</h4>
                    <p className="text-gray-900">{record.diagnosis}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Treatment</h4>
                    <p className="text-gray-900">{record.treatment}</p>
                  </div>
                </div>

                {record.notes && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Notes</h4>
                    <p className="text-gray-900">{record.notes}</p>
                  </div>
                )}
              </div>
            ))}

            {patient.history.length === 0 && (
              <p className="text-center text-gray-500">No medical history available</p>
            )}
          </div>
        </div>

        <div className="border-t p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}