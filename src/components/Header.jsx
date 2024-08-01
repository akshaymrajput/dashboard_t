import React from "react";
import { CiSearch, CiMail, CiSettings, CiBellOn } from "react-icons/ci";
import { BiLogoMicrosoft } from "react-icons/bi";

const Header = () => {
    return (
        <div className="bg-gray-800 sticky top-0 h-16 flex items-center justify-between px-4">
            <div className="flex items-center gap-2 sm:gap-6">
                <div className="text-blue-600 h-8 w-8 sm:h-10 sm:w-10">
                    <BiLogoMicrosoft className="w-full h-full" />
                </div>
                <div className="hidden sm:flex items-center gap-1 px-2 py-1 w-40 sm:w-60 border rounded-md border-gray-600 bg-gray-700">
                    <div className="h-5 w-5 text-gray-200">
                        <CiSearch className="w-full h-full" />
                    </div>
                    <input
                        className="outline-none w-full bg-inherit text-gray-200"
                        type="text"
                        name="search"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-6">
                <div className="flex gap-2 sm:gap-3">
                    <div className="h-8 w-8 p-[3px] sm:p-[5px] text-gray-200 bg-gray-600 rounded-full">
                        <CiMail className="h-full w-full" />
                    </div>
                    <div className="h-8 w-8 p-[3px] sm:p-[5px] text-gray-200 bg-gray-600 rounded-full">
                        <CiSettings className="h-full w-full" />
                    </div>
                    <div className="h-8 w-8 p-[3px] sm:p-[5px] text-gray-200 bg-gray-600 rounded-full">
                        <CiBellOn className="h-full w-full" />
                    </div>
                </div>
                <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full">
                    <img
                        className="h-full w-full rounded-full"
                        src="https://i.pravatar.cc/150?img=47"
                        alt="avatar"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
