'use client';
import React, { useState } from 'react';

export default function Footer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const rwPhoneRegex = /^(?:\+250|250|0)[78]\d{8}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setMessage({ type: 'error', text: 'Name is required.' });
      return;
    }
    if (!phone.trim()) {
      setMessage({ type: 'error', text: 'Phone number is required.' });
      return;
    }
    if (!rwPhoneRegex.test(phone.replace(/\s/g, ''))) {
      setMessage({
        type: 'error',
        text: 'Enter a valid Rwanda phone number (e.g. +250 78 123 4567).',
      });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.replace(/\s/g, ''), 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: 'success', text: 'Thank you! You’ve subscribed.' });
        setName('');
        setPhone('');
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Network error. Try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="w-full">
      <div className="bg-[#A8610C] w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-10 min-h-[350px] gap-10">
        <div className="w-full lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold mb-4">
            Ready to stay informed?
          </h2>
          <p className="text-white text-base md:text-lg 2xl:text-xl font-medium">
            Join Fuel Flash today and never pay more than you need to fuel for.
          </p>
        </div>
        <div className="w-full max-w-xl flex justify-center lg:justify-end">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-12 w-full max-w-xl flex flex-col"
            autoComplete="off"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#000A28] mb-6 text-center">
              Subscribe to Fuel Flash
            </h3>
            {message && (
              <div
                className={`mb-4 p-3 rounded text-center text-sm font-medium ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message.text}
              </div>
            )}

            <label htmlFor="name" className="block mb-2 text-[#000A28] font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full mb-4 px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#A8610C] focus:border-transparent transition"
              disabled={loading}
            />

            <label htmlFor="phone" className="block mb-2 text-[#000A28] font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+250 78 123 4567"
              className="w-full mb-6 px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#A8610C] focus:border-transparent transition"
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-bold rounded-md py-3 sm:py-4 shadow-md transition-colors ${
                loading
                  ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  : 'bg-[#000A28] hover:bg-[#21006A] text-white cursor-pointer'
              }`}
            >
              {loading ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#000A28] w-full py-4 px-2 text-center text-white text-xs sm:text-sm">
        <div>©{new Date().getFullYear()} FuelFlash. All rights reserved</div>
        <div>Made for vehicle owners in Rwanda</div>
      </div>
    </footer>
  );
}