import React from "react";

function LoginExpired() {
  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Login Expired</h1>
        <p className="mb-8">Your login session has expired. Please log in again to continue.</p>
        <a
          href="/api/auth/login"
          className="font-medium p-2 md:p-4 uppercase w-full rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 text-white focus:outline-none focus:ring hover:bg-blue-700"
        >
          Login Again
        </a>
      </div>
    </div>
  );
}

export default LoginExpired;
