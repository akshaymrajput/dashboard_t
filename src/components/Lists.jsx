import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { PiCallBell } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

const items = [
    { logo: <BiTargetLock />, title: "Goals", bg: "bg-orange-600" },
    { logo: <FaHamburger />, title: "Popular Dishes", bg: "bg-blue-600" },
    { logo: <PiCallBell />, title: "Menus", bg: "bg-cyan-600" },
];

const Lists = () => {
    return (
        <div className="bg-gray-800 rounded-lg h-full py-4 px-2 sm:py-6 sm:px-4 flex flex-col gap-4">
            {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div
                            className={`${item.bg} rounded-full text-2xl p-3 sm:p-4 bg-opacity-50 flex items-center justify-center`}
                        >
                            {item.logo}
                        </div>
                        <div className="text-white">{item.title}</div>
                    </div>
                    <div className="rounded-full bg-gray-600 flex justify-center items-center p-1">
                        <IoIosArrowForward className="text-xl text-white" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Lists;
