'use client'

import { useState } from 'react';

export default function ProductInfo() {
  // State to manage quantity and price
  const [quantity, setQuantity] = useState<1 | 2 | 3>(1);
  
  // Price mapping based on quantity
  const priceMapping: { 1: number; 2: number; 3: number } = {
    1: 7.99,
    2: 10.88,
    3: 13.88
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value) as 1 | 2 | 3);
  };

  return (
    <div className="w-full sm:w-1/3 text-center sm:text-left sm:ml-6 mb-6 sm:mb-0">
      <h1 className="font-bold text-2xl sm:text-3xl text-blue-800">SAAM CREAM</h1>
      <p className="text-xl text-gray-600 mt-2">
        Saam Cream, Saam Face Cream, Saam Renewal Face Cream,
        Saam Melasma Face Cream, Skin Care Facial Moisturizer Face Cream For All Skin Types (1PC)
      </p>
      
      <h2 className="text-blue-800 font-bold text-xl sm:text-2xl mt-4">PRICE</h2>


       {/* Quantity Dropdown */}
       <div className="mt-4">
        <label htmlFor="quantity" className="font-bold text-lg text-blue-800">Select Quantity:</label>
        <select
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="ml-2 p-2 border border-gray-300 rounded"
        >
          <option value={1}>1 PCS</option>
          <option value={2}>2 PCS</option>
          <option value={3}>3 PCS</option>
        </select>
      </div>
          {/* Total Price Display */}
          <div className="mt-4">
        <p className="font-bold text-lg text-blue-800">Total Price: ${priceMapping[quantity] * quantity}</p>
      </div>
    
     {/* <div className="flex justify-center sm:justify-start gap-2 items-center">
        <p className="text-lg font-bold text-green-600">
          1PCS. ${priceMapping[1]} · 7 ;<br />
          2PCS. ${priceMapping[2]} · 10 ;<br />
          3PCS. ${priceMapping[3]}
        </p>
      </div>
     */}
      <h2 className="text-blue-800 font-bold mt-4 text-xl">DESCRIPTION:</h2>
      <p className="text-gray-600 mt-2">
        ✓ Saam is a premium product.<br />
        · Use it every night before going to bed.<br />
        · Wash your face thoroughly then use a sufficient amount of cream to apply evenly on the ...<br />
        Specification:<br />
        Name: Saam Face Cream.<br />
        Net: 20g<br />
        Shelf Life: 3 years<br />
        Package Includes: 1/2/3pcs * Saam Face Cream
      </p>

      <div className="w-auto mt-2 border border-1px border-gray-300"></div>
      <p className="mt-2 text-cyan-700">2.9(11) · AED 161.00 · ‎In stock.</p>
      <p>⭐⭐⭐⭐⭐ |2.9 Rating| 120 reviews.</p>
</div>
  );
}
