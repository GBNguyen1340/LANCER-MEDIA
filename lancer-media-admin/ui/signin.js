"use client";

import { useFormState, useFormStatus } from "react-dom";
import Image from "next/image";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";

import { signIn } from "@/lib/firebase/auth";

export default function SignInComponent() {

  const [errorMessage, dispatch] = useFormState(signIn, undefined);

  return (
    <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 md:p-4">
          <Image src="/lancerLogo.jpg" alt="Logo" className="w-20 h-20" width={50} height={50} />
        </div>
        <form className="p-12 md:p-24" action={dispatch}>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <UserIcon className="absolute ml-3 w-[24px]" />
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <LockClosedIcon className="absolute ml-3 w-[24px]" />
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Password"
              required
            />
          </div>
          <div className="text-center text-red-700 font-bold text-sm">
            {errorMessage && <p>{errorMessage}</p>}
          </div>
          <LoginButton />
        </form>
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  const handleClick = (event) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <button
      aria-disabled={pending}
      type="submit"
      onClick={handleClick}
      className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
    >
      Login
    </button>
  );
}