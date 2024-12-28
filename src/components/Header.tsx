import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="bg-gray-100 w-full flex justify-between items-center p-4 sm:h-16 h-[60px]">
      {/* Logo Section */}
      <div className="flex items-center justify-start">
        <Image
          src="/logo.jpg"
          alt="logo"
          height={300}
          width={300}
          className="object-cover   h-[60px] sm:w-auto md:w-[200px] sm:pl-3"
        />
      </div>

      {/* Right Section */}
      <div className="flex gap-4  items-center sm:flex-row sm:gap-6">
        <p className="md:text-xl sm:text-sm font-bold sm:whitespace-nowrap">
          Contact Us 
        </p>

        {/* Icons - Visible on medium screens and above */}
        <div className=" gap-4 items-center sm:gap-6 hidden sm:flex">
          <CiSearch className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
          <FaShoppingCart className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
          <FaRegUserCircle className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
        </div>
      </div>
    </div>
  );
}
