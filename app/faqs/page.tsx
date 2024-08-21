// src/app/faqs/page.tsx

import { FC } from "react";
import Header from "../components/Header";

const FaqsPage: FC = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">What is UniLearn?</h2>
              <p className="mt-2">
                UniLearn is a comprehensive SaaS platform designed to streamline
                university learning management, providing tools for course
                management, student assessments, and communication.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">How do I sign up?</h2>
              <p className="mt-2">
                You can sign up by contacting your university administrator, who
                will provide you with credentials and access details.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">
                Can I access UniLearn from my mobile device?
              </h2>
              <p className="mt-2">
                Yes, UniLearn is designed to be responsive and accessible from
                various devices, including mobile phones and tablets.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FaqsPage;
