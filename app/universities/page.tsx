"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const UniversitiesPage = () => {
    const [universities, setUniversities] = useState<any[]>([]);

    useEffect(() => {
        const fetchUniversities = async () => {
            const response = await fetch('/api/universities');
            const data = await response.json();
            setUniversities(data);
        };

        fetchUniversities();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-extrabold text-gray-900">Universities</h1>
                <Link href="/universities/create" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                    Create New University
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Address</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Contact Number</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Website</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {universities.map((university) => (
                            <tr key={university.id} className="hover:bg-gray-50 border-b border-gray-200">
                                <td className="py-3 px-4 text-sm text-gray-800">{university.name}</td>
                                <td className="py-3 px-4 text-sm text-gray-800">{university.address}</td>
                                <td className="py-3 px-4 text-sm text-gray-800">{university.contactNumber}</td>
                                <td className="py-3 px-4 text-sm text-gray-800">{university.website}</td>
                                <td className="py-3 px-4 text-sm text-gray-800">{university.admin}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UniversitiesPage;
