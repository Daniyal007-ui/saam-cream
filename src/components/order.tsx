'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    city: '',
    address: '',
    quantity: 1,
    price: 160,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);  // Track form submission status

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'quantity') {
      let price = 160;
      if (value === '2') price = 250;
      if (value === '3') price = 350;
      setFormData((prev) => ({
        ...prev,
        price,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct template parameters
    const templateParams = {
      name: formData.name,
      contact: formData.contact,
      city: formData.city,
      address: formData.address,
      quantity: formData.quantity,
      price: formData.price,
    };

    // Send the email using EmailJS
    emailjs.send('service_ou6w3s6', 'template_tjowngl', templateParams, '18Og-v0vETJHiLyiI')
      .then(
        (response) => {
            console.log("order submitted",response)
          alert('Order received! A confirmation email has been sent.');
          setFormSubmitted(true);  // Set form submission to true
          
          // Reset form after successful submission
          setFormData({
            name: '',
            contact: '',
            city: '',
            address: '',
            quantity: 1,
            price: 160,
          });
        },
        (error) => {
            console.log("fail to submitted",error)
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Order Form</h2>
      {formSubmitted && <div className="text-green-500 mb-4">Thank you for your order!</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="contact" className="font-semibold">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="font-semibold">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="font-semibold">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="quantity" className="font-semibold">Quantity</label>
          <select
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          >
            <option value="1">1 Piece</option>
            <option value="2">2 Pieces</option>
            <option value="3">3 Pieces</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="font-semibold">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={`${formData.price} SAR`}
            readOnly
            className="border p-2 rounded bg-gray-200"
          />
        </div>

        <div>
          <button type="submit" className="w-full bg-cyan-500 text-white p-2 rounded mt-4">Submit Order</button>
        </div>
      </form>
    </div>
  );
};

export default Order;
