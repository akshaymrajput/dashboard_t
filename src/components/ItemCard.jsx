import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";

const items = [
    {
        logo: <CiShoppingBasket className="w-full h-full p-1" />,
        bg: "bg-blue-600",
        title: "Total Orders",
        number: "75",
        status: {
            color: "text-green-600",
            icon: <FaCaretUp className="w-full h-full p-1" />,
        },
    },
    {
        logo: <GiShoppingBag className="w-full h-full p-1" />,
        bg: "bg-green-600",
        title: "Total Delivered",
        number: "70",
        status: {
            color: "text-red-600",
            icon: <FaCaretDown className="w-full h-full p-1" />,
        },
    },
    {
        logo: <GiShoppingBag className="w-full h-full p-1" />,
        bg: "bg-orange-600",
        title: "Total Cancelled",
        number: "05",
        status: {
            color: "text-green-600",
            icon: <FaCaretUp className="w-full h-full p-1" />,
        },
    },
    {
        logo: <AiOutlineDollar className="w-full h-full p-1" />,
        bg: "bg-pink-600",
        title: "Total Revenue",
        number: "$12k",
        status: {
            color: "text-red-600",
            icon: <FaCaretDown className="w-full h-full p-1" />,
        },
    },
];

const ItemCard = () => {
    return (
        <div className="flex gap-4 w-full h-full flex-wrap">
            {items.map((item) => (
                <div className="bg-gray-800 p-3 rounded-lg flex flex-1 justify-center flex-col gap-2">
                    <div className={`${item.bg} h-8 w-8 rounded-lg`}>
                        {item.logo}
                    </div>
                    <div className="text-xs">{item.title}</div>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">
                            {item.number}
                        </span>
                        <div
                            className={`${item.status.color} flex items-center text-sm`}
                        >
                            <div className="h-7 w-7">{item.status.icon}</div>
                            <span>3%</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemCard;
