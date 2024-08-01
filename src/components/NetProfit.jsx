import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCaretUp } from "react-icons/fa";

const NetProfit = () => {
    return (
        <div className="bg-gray-800 py-4 px-2 sm:px-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex flex-col justify-between items-center sm:items-start text-center sm:text-left">
                <div className="text-gray-300 text-sm sm:text-base">
                    Net Profit
                </div>
                <div className="font-bold text-xl sm:text-3xl">$ 6759.25</div>
                <div className="text-green-600 flex items-center">
                    <div className="h-5 w-5 sm:h-7 sm:w-7">
                        <FaCaretUp className="w-full h-full" />
                    </div>
                    <span className="ml-1">3%</span>
                </div>
            </div>
            <div className="h-20 w-20 sm:h-24 sm:w-24">
                <CircularProgressbar
                    value={70}
                    text={`${70}%`}
                    strokeWidth={12}
                    background={false}
                />
            </div>
        </div>
    );
};

export default NetProfit;
