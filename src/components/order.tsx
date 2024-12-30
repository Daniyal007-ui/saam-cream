'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const OrderForm = () => {
  // Define the ref for the form element
  const form = useRef<HTMLFormElement | null>(null);

  // State to manage the confirmation message visibility
  const [orderPlaced, setOrderPlaced] = useState(false);

  // State to manage quantity and price
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  // Conditional pricing based on quantity
  const getPrice = (quantity: number) => {
    if (quantity === 1) {
      return 160; // SAR 160 for 1 item
    } else if (quantity === 2) {
      return 250; // SAR 250 for 2 items
    } else if (quantity === 3) {
      return 350; // SAR 350 for 3 items
    }
    return 0; // Default price (you could handle this case as needed)
  };

  const pricePerItem = getPrice(quantity); // Get the price based on quantity
  const totalPrice = pricePerItem; // Since the price is already set based on quantity

  // Handle form submission to send the order details via EmailJS
  const sendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");

    // Check if form.current is available
    if (form.current) {
      // Prepare the data to send to EmailJS including quantity and price
      const formData = new FormData(form.current);
      formData.append("quantity", String(quantity));  // Append quantity
      formData.append("price", String(totalPrice));   // Append price

      emailjs
        .sendForm('service_ou6w3s6', 'template_tjowngl', form.current, {
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
    } else {
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
              className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Contact Number Input */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="user_contact"
              required
              className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Shipping Address Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            name="user_city"
            required
            className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Additional Instructions Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            name="user_address"
            className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Quantity and Price Section */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              max="3" // Limit the quantity to 3 as per your pricing rules
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="text-sm font-medium text-gray-700">Price: SAR {pricePerItem}</div>
          <div className="text-sm font-medium text-gray-700">Total: SAR {totalPrice}</div>
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
