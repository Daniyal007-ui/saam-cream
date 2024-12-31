"use client";


import Image from "next/image";
import { useState } from "react";
import OrderForm from "./OrderForm";


export default function Hero() {
    const [quantity, setQuantity] = useState<1 | 2 | 3>(1);
  
    // Price mapping based on quantity
    const priceMapping: { 1: number; 2: number; 3: number } = {
      1: 160,
      2: 250,
      3: 350
    };
  
    // Handle quantity change
    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setQuantity(parseInt(e.target.value) as 1 | 2 | 3);
    };

    const [mainImage, setMainImage] = useState("/pic1.jpg");

    // Function to change the main image when a thumbnail is clicked
    const handleThumbnailClick = (src: string) => {
        setMainImage(src);
    }

    return (
        <div className="h-auto w-full bg-gradient-to-r from-cyan-400 to-gray-300 flex flex-col sm:flex-row  justify-around items-center py-10 px-4 sm:px-6 md:px-12">
            {/* Image Section */}
            <div className="flex flex-col items-center sm:items-start w-full sm:w-1/3 mb-6 sm:mb-0">
                <div className="md:w-full sm:w-1/2 mb-4">
                    <Image src={mainImage} alt="saam cream" width={400} height={300} className="h-auto w-full object-cover" />
                </div>
                <div className="flex space-x-3 mb-2 md:ml-5 sm:mb-0 sm:ml-0">
                    <div onClick={() => handleThumbnailClick("/pic2.jpg")} className="cursor-pointer">
                        <Image src={"/pic2.jpg"} alt="pic1" height={200} width={200} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/pic3.jpg")} className="cursor-pointer">
                        <Image src={"/pic3.jpg"} alt="pic2" height={200} width={200} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/pic4.jpg")} className="cursor-pointer">
                        <Image src={"/pic4.jpg"} alt="pic3" height={200} width={200} className="rounded-md" />
                    </div>
                </div>
            </div>

            {/* Product Info Section */}
            <div className="w-full sm:w-1/3 text-center sm:text-left sm:ml-6 mb-6 sm:mb-0">
                <h1 className=" font-bold text-2xl sm:text-3xl text-blue-800">SAAM CREAM</h1>
                <p className="text-xl text-gray-600 mt-2">
                Don&apos;t miss Renewal Face Cream if you want to have flawless skin
                    </p>
                <h2 className="text-blue-800 font-bold text-xl sm:text-2xl mt-4">PRICE</h2>
               
       {/* Quantity Dropdown */}
       <div className="mt-4">
        <label htmlFor="quantity" className="font-bold text-lg text-cyan-800">Select Quantity:</label>
        <select
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="ml-2 text-cyan-500 p-2 border border-cyan-300 rounded"
        >
          <option value={1}>1 PCS</option>
          <option value={2}>2 PCS</option>
          <option value={3}>3 PCS</option>
        </select>
      </div>
          {/* Total Price Display */}
          <div className="mt-4">
        <p className="font-bold text-lg text-green-800">Total Price:  {priceMapping[quantity]} SAR</p>
      </div>

                <h2 className="text-blue-800 font-bold mt-4 text-xl">DESCRIPTION:</h2>
                <p className="text-gray-600 mt-2">
                product of SAAM Cosmetics, best seller in Saudi Arabia and UAE.
                     It can treat all long-term skin problems such as melasma, freckles, age spots, 
                    and dark spots. Experience this face cream product of SAAM!
                </p>

                <div className="w-auto mt-2 border border-1px border-gray-300"></div>
                <p className="mt-2 text-cyan-700">2.9(11) · AED 161.00 · ‎In stock.</p>
               
            </div>

            {/* Order Form Section */}
            <OrderForm/>
        </div>
    );
}
