"use client";
import { signOut } from "@/lib/firebase/auth";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
const SignOutButton = ({ collapsed }) => {

  const handleSignOut = (event) => {
    event.preventDefault();
    console.log("click logout")
    signOut();
  };

  return (
    <div className="w-full mb-6">
      <button
        className="w-full flex items-center rounded-md border border-gray-300 px-3 py-2 hover:bg-gray-100 hover:text-amber-800"
        onClick={handleSignOut}
      >
        <ArrowLeftStartOnRectangleIcon className="w-8 h-8" />
        {!collapsed && <span className="font-medium">Logout</span>}
      </button>
    </div>
  );
};

export default SignOutButton;
