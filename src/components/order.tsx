'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const OrderForm = () => {
  // Define the ref for the form element
  const form = useRef<HTMLFormElement | null>(null);

  // State to manage the confirmation message visibility
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle form submission to send the order details via EmailJS
  const sendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");

    // Check if form.current is available
    if (form.current) {
      emailjs
        .sendForm('service_ou6w3s6', 'template_0stkv2x', form.current, {
          publicKey: '18Og-v0vETJHiLyiI',
        })
        .then(
          () => {
            console.log('Order submitted successfully!');
            // Show the confirmation message
            setOrderPlaced(true);
            // Optionally reset the form after submission
            form.current!.reset();
          },
          (error) => {
            console.log('Order submission failed...', error.text);
          }
        );
    }
    else {
        console.error('Form reference is not available');
      }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-cyan-100 shadow-lg rounded-lg mt-8">
      {orderPlaced && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md border border-green-400">
          <p className="text-center text-lg font-semibold">Thank you! Your order has been placed successfully.</p>
        </div>
      )}

      <form ref={form} onSubmit={sendOrder} className="space-y-4">
        <h2 className="text-2xl font-bold text-green-400 underline text-center">Order Form</h2>

        {/* Name Input */}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Contact Number Input */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="user_contact"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Product Color Input 
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Color</label>
            <input
              type="text"
              name="color"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

       
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <input
              type="text"
              name="size"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div> */}

        {/* Quantity Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            name="quantity"
            min="1"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Shipping Address Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
          <textarea
            name="shipping_address"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Additional Instructions Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Instructions</label>
          <textarea
            name="additional_instructions"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto mt-4 px-6 py-2 bg-green-400 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};
