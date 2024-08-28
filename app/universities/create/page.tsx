"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const CreateUniversityPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/universities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push('/universities');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Create University</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
          <input
            id="address"
            type="text"
            {...register('address', { required: 'Address is required' })}
            className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
        </div>
        <div>
          <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-1">Contact Number</label>
          <input
            id="contactNumber"
            type="text"
            {...register('contactNumber', { required: 'Contact Number is required' })}
            className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>}
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-1">Website</label>
          <input
            id="website"
            type="text"
            {...register('website')}
            className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.website ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>}
        </div>
        <div>
          <label htmlFor="admin" className="block text-sm font-semibold text-gray-700 mb-1">Admin</label>
          <input
            id="admin"
            type="text"
            {...register('admin')}
            className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.admin ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.admin && <p className="text-red-500 text-sm mt-1">{errors.admin.message}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">Create University</button>
      </form>
    </div>
  );
};

export default CreateUniversityPage;
