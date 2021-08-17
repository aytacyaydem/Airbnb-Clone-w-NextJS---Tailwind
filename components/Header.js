import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

//Packages
import { DateRangePicker } from "react-date-range";

function Header() {
  let numberOfGuestRef = React.createRef();
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSearch(event) {
    setSearchText(event.target.value);
  }
  function handleSelectDate(ranges) {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  function handleNumberOfGuests(event) {
    console.log(event.target.value);
    setNumberOfGuests(event.target.value);
  }
  function handleCancelSearch(){
    setSearchText("");
  }
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
          onChange={handleSearch}
          value={searchText}
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

      {searchText && (
        <div className="flex flex-col col-span-3 mx-auto ">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelectDate}
            minDate={new Date()}
            rangeColors={["#FF5A5F"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              ref={numberOfGuestRef}
              type="number"
              min={1}
              value={numberOfGuests}
              onChange={handleNumberOfGuests}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={handleCancelSearch} className="flex-1 text-gray-500">Cancel</button>
            <button className="flex-1 text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export { Header };
