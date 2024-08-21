"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  universityName: string;
  email: string;
  address: string;
  phone: string;
  subscriptionPlan: string;
  terms: boolean;
}

const UniversityRegistrationPage = () => {
  const [formData, setFormData] = useState<FormData>({
    universityName: '',
    email: '',
    address: '',
    phone: '',
    subscriptionPlan: '',
    terms: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' && value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Create University Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/university-login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="universityName" className="block text-sm font-medium text-gray-700">University Name</label>
              <input
                id="universityName"
                name="universityName"
                type="text"
                value={formData.universityName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter University Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Email Address"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Address"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Phone Number"
              />
            </div>
            <div>
              <label htmlFor="subscriptionPlan" className="block text-sm font-medium text-gray-700">Subscription Plan</label>
              <select
                id="subscriptionPlan"
                name="subscriptionPlan"
                value={formData.subscriptionPlan}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>Select Subscription Plan</option>
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              required
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">terms and conditions</a>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UniversityRegistrationPage;
