"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/lancerLogo.jpg"
              alt="Logo"
              className="w-40 h-auto pb-10"
              height={400}
              width={400}
            />
            <span className="text-xxl font-bold text-gray-800">
              Lancer Media
            </span>
          </Link>
          <h3 className="text-xl font-bold mb-2">Lancer Media</h3>
          <p className="text-gray-400">
            Discover the Best Talent, Studio, and Equipment Solutions.
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <address className="text-gray-400">
            123 Main Street <br />
            Anytown, CA 12345
          </address>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-gray-400">
            <a href="tel:1234567890" className="underline">
              (123) 456-7890
            </a>
            <br />
            <a href="mailto:info@lancermedia.vn" className="underline">
              info@lancermedia.vn
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
          <p className="text-gray-400">
            Mon-Fri: 9:30 AM - 7:30 PM <br />
            Sat: 9:00 AM - 5:00 PM <br />
            Sun: 11:00 AM - 05:00 PM
          </p>
        </div>
        <div className="w-full mt-4 text-center md:mt-0">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} 2023 LANCER MEDIA. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
