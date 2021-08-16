import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white shadow-md p-5 md:px-10">
      {/* Left Side - Logo*/}
      <div className="relative flex h-10 cursor-pointer my-auto">
        <Image
          src="/images/logo.svg"
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle Side - Search */}
      <div className="relative flex items-center rounded-full mx-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          className=" flex-grow py-2 bg-transparent self-stretch outline-none pl-5 text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
        />
        <SearchIcon className="absolute hidden md:inline h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer right-0 md:mx-2" />
      </div>

      {/* Right Side */}
      <div className="relative flex space-x-4 items-center justify-end text-gray-500">
        <div className="flex space-x-4 items-center  flex-1 justify-end">
          <p className=" overflow-hidden hidden md:inline-flex whitespace-nowrap cursor-pointer">
            Become a host!
          </p>
          <GlobeAltIcon className="h-6 min-h-6 min-w-6 cursor-pointer" />
        </div>
        <div className="flex border-2 rounded-full p-1 space-x-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export { Header };
