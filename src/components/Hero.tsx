"use client";


import Image from "next/image";
import { OrderForm } from "./order";
import { useState } from "react";


export default function Hero() {

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
                        <Image src={"/pic2.jpg"} alt="pic1" height={110} width={110} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/pic3.webp")} className="cursor-pointer">
                        <Image src={"/pic3.webp"} alt="pic2" height={100} width={100} className="rounded-md" />
                    </div>
                    <div onClick={() => handleThumbnailClick("/pic4.jpg")} className="cursor-pointer">
                        <Image src={"/pic4.jpg"} alt="pic3" height={100} width={100} className="rounded-md" />
                    </div>
                </div>
            </div>

            {/* Product Info Section */}
            <div className="w-full sm:w-1/3 text-center sm:text-left sm:ml-6 mb-6 sm:mb-0">
                <h1 className=" font-bold text-2xl sm:text-3xl text-blue-800">SAAM CREAM</h1>
                <p className="text-xl text-gray-600 mt-2">Saam Cream,Saam Face Cream,
                    Saam Renewal Face Cream,
                    Saam Melasma Face Cream,
                    Skin Care Facial Moisturizer Face Cream For All Skin Types (1PC)</p>
                <h2 className="text-blue-800 font-bold text-xl sm:text-2xl mt-4">PRICE</h2>
                <div className="flex justify-center sm:justify-start gap-2 items-center">
                    <p className="text-lg font-bold text-green-600"> 1PCS. $7.99 · 7 ;<br/> 2PCS. $10.88 · 10 ;<br/> 3PCS. $13.88</p>
                   {/* <p className="text-sm line-through text-gray-600">$14.00</p>*/}
                </div>

                {/*<h2 className="text-black font-bold text-xl sm:text-2xl mt-4">SIZE:</h2>
                <div className="flex justify-center sm:justify-start space-x-2 text-gray-400 mt-2">
                    <div className="border border-green-500 h-8 w-8 text-center leading-8">S</div>
                    <div className="border border-gray-500 h-8 w-8 text-center leading-8">M</div>
                    <div className="border border-gray-500 h-8 w-8 text-center leading-8">L</div>
                    <div className="border border-gray-500 h-8 w-8 text-center leading-8">XL</div>
                    <div className="border border-gray-500 h-8 w-9 text-center leading-8 text-sm">2XL</div>
                </div>

                <div className="mt-3">
                    <h1 className="text-2xl">Color: <span className="text-2xl font-bold text-gray-600">WHITE</span></h1>
                    <div className="flex  mt-2 justify-center sm:justify-start items-center ">
                        <div className="h-[25px] ml-2 w-[30px] border border-1px border-black bg-gray-300"></div>
                        <div className="h-[25px] ml-2 w-[30px] bg-red-600"></div>
                        <div className="h-[25px] ml-2 w-[30px] bg-blue-800"></div>
                        <div className="h-[25px] ml-2 w-[30px] bg-yellow-500"></div>
                        <div className="h-[25px] ml-2 w-[30px] bg-black"></div>
                    </div>
                </div>*/}

                <h2 className="text-blue-800 font-bold mt-4 text-xl">DESCRIPTION:</h2>
                <p className="text-gray-600 mt-2">
                    ✓ Saam is a premium product.
                    · Use it every night before going to bed.
                    · Wash your face thoroughly then use a
                    sufficient amount of cream to apply
                    evenly on the ...<br/>
                    Specification:<br/>
                    Name: Saam Face Cream.<br/>
                    Net: 20g<br/>
                    Shelf Life: 3 years<br/>
                    Package Includes:
                    1/2/3pcs * Saam Face Cream
                </p>

                <div className="w-auto mt-2 border border-1px border-gray-300"></div>
                <p className="mt-2 text-cyan-700">2.9(11) · AED 161.00 · ‎In stock.</p>
                <p>⭐⭐⭐⭐⭐ |2.9 Rating| 120 reviews.</p>
            </div>

            {/* Order Form Section */}
            <OrderForm />
        </div>
    );
}
