import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface MedicalRecordData {
  diagnosis: string;
  treatment: string;
  prescription: string;
  notes: string;
  followUpDate: string;
}

export default function MedicalRecordForm() {
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm<MedicalRecordData>();

  const onSubmit = (data: MedicalRecordData) => {
    // In a real app, this would make an API call
    console.log(data);
    alert('Medical record saved successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Medical Record</h1>
      
      <div className="bg-white shadow-sm rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diagnosis
            </label>
            <textarea
              {...register('diagnosis', { required: true })}
              rows={3}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter diagnosis details..."
            />
            {errors.diagnosis && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Treatment
            </label>
            <textarea
              {...register('treatment', { required: true })}
              rows={3}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter treatment details..."
            />
            {errors.treatment && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prescription
            </label>
            <textarea
              {...register('prescription')}
              rows={3}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter prescription details..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              {...register('notes')}
              rows={3}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter any additional notes..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Follow-up Date
            </label>
            <input
              type="date"
              {...register('followUpDate')}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Save Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}