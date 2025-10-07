'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#A8610C] w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-10 min-h-[350px] gap-10">
        <div className="w-full 2xl:ml-25 xl:text-left text-center lg-text-left md:text-center flex flex-col lg:pr-12 mb-8 lg:mb-0">
          <h2 className="text-white ml-3 lg:ml-0 xl:ml-0 text-[150%] 2xl:text-4xl md:text-4xl sm:text-3xl font-extrabold mb-4 ">
            Ready to stay informed?
   </h2>
   <p className="text-white text-base text-md 2xl:text-[125%] md:text-[128%] xl:text-xl font-medium">
            Join Fuel Flash today and never pay more than you need to fuel for.
          </p>
        </div>
   <div className="w-full 2xl:mr-20 max-w-xl flex justify-center lg:justify-end">
          <form
            className="bg-white rounded-xl shadow-xl p-6 sm:p-10 md:p-12 py-10 md:py-20 w-full max-w-xl flex flex-col justify-center"
            autoComplete="off"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#000A28] mb-6 sm:mb-8 text-center">
              Subscribe to Fuel Flash
            </h3>
      <label className="block mb-2 text-[#000A28] font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter name"
              className="w-full mb-4 px-3 py-2 border border-gray-400 rounded focus:outline-none"
              autoComplete="off"
            />
     <label className="block mb-2 text-[#000A28] font-medium">
              Contact
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="Enter contact"
              className="w-full mb-6 sm:mb-8 px-3 py-2 border border-gray-400 rounded focus:outline-none"
              autoComplete="off"
            />
            <button
              type="button"
              className="w-full bg-[#000A28] hover:bg-[#21006A] text-white font-bold rounded-md py-3 sm:py-4 shadow-md transition cursor-pointer"
            >
              Subscribe
      </button>
          </form>
        </div>
      </div>
      <div className="bg-[#000A28] w-full py-4 px-2 text-center text-white text-xs sm:text-sm">
        <div>&copy;2025 FuelFlash. All rights reserved</div>
        <div>Made for vehicle owners in Rwanda</div>
      </div>
    </footer>
  );
}