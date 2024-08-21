// src/app/teacher-login/page.tsx

import { FC } from "react";

const TeacherLoginPage: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Faculty Login</h1>
        <p className="mb-4 text-center">
          Please fill out the following fields to login:
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-semibold mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your User Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-sm">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Are you a student?{" "}
          <a href="/student-login" className="text-blue-500 hover:underline">
            Login Here
          </a>
        </p>
        <p className="mt-2 text-center">
          If you forgot your password you can{" "}
          <a href="/password-reset" className="text-blue-500 hover:underline">
            reset it
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TeacherLoginPage;
