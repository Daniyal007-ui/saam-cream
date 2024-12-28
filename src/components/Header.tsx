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
          height={100}
          width={100}
          className="sm:pl-3 h-[60px] w-[200px] object-cover"
        />
      </div>

      {/* Right Section: Contact Us, Search, Cart, User */}
      <div className="flex gap-6 items-center sm:flex-row flex-col sm:gap-6 ">
        <p className="text-xl sm:text-2xl font-bold">Contact Us |</p>

        <div className="flex gap-4 items-center">
          <CiSearch className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
          <FaShoppingCart className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
          <FaRegUserCircle className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
        </div>
      </div>
    </div>
  );
}
