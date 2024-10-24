import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar } from 'lucide-react';

interface AppointmentFormData {
  ownerName: string;
  email: string;
  phone: string;
  petName: string;
  petType: string;
  breed: string;
  appointmentDate: string;
  appointmentTime: string;
  notes: string;
}

export default function AppointmentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<AppointmentFormData>();

  const onSubmit = (data: AppointmentFormData) => {
    // In a real app, this would make an API call
    console.log(data);
    alert('Appointment request submitted successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-8">
          <Calendar className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold">Book an Appointment</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Owner's Name
              </label>
              <input
                {...register('ownerName', { required: true })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="John Doe"
              />
              {errors.ownerName && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                type="email"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="john@example.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Valid email is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                {...register('phone', { required: true })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="(123) 456-7890"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pet's Name
              </label>
              <input
                {...register('petName', { required: true })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Max"
              />
              {errors.petName && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pet Type
              </label>
              <select
                {...register('petType', { required: true })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select pet type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
              {errors.petType && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Breed
              </label>
              <input
                {...register('breed')}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Golden Retriever"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                {...register('appointmentDate', { required: true })}
                type="date"
                className="w-full px-3 py-2 border rounded-md"
              />
              {errors.appointmentDate && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time
              </label>
              <select
                {...register('appointmentTime', { required: true })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
              {errors.appointmentTime && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              {...register('notes')}
              className="w-full px-3 py-2 border rounded-md"
              rows={4}
              placeholder="Any special requirements or concerns..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Submit Appointment Request
          </button>
        </form>
      </div>
    </div>
  );
}