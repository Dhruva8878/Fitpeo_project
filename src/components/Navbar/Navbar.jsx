import React from "react";
import { CiBellOn, CiMail, CiSearch, CiSettings } from "react-icons/ci";
import { FaDharmachakra } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 overflow-auto bg-gray-800">
      <nav className="">
        <div className="mx-auto px-2 sm:px-6">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex">
              <FaDharmachakra  className='text-4xl text-blue-500 mr-14 ml-4'/>
              <div class="max-w-md mx-auto">
                <div class="relative flex w-full h-8 rounded-lg border border-black bg-[#2a2b2f] overflow-hidden">
                  <div class="grid place-items-center h-full w-12 text-gray-300">
                    <CiSearch className="text-white" />
                  </div>
                  <input
                    class="outline-none text-sm text-white bg-[#2a2b2f] pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative gap-4 flex">
                <CiMail  className=" rounded-full bg-[#2a2b2f] p-2 text-white text-4xl"/>
                <CiSettings  className=" rounded-full bg-[#2a2b2f] p-2 text-white text-4xl"/>
                <CiBellOn  className=" rounded-full bg-[#2a2b2f] p-2 text-white text-4xl"/>
                <img
                  className="h-8 w-8 mt-1 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
