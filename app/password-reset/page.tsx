"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

interface PasswordResetFormData {
    email: string;
}

const PasswordResetPage = () => {
    const [formData, setFormData] = useState<PasswordResetFormData>({
        email: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle password reset logic here
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Reset Your Password</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Enter your email address and we will send you a link to reset your password.
                </p>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Email Address"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Send Reset Link
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordResetPage;
