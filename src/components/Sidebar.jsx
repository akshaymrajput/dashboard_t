import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdLogOut, IoMdHome } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";

const links = [
    { logo: <IoMdHome />, path: "/", label: "Home" },
    { logo: <MdInsertChartOutlined />, path: "/charts", label: "Charts" },
    { logo: <RiTodoLine />, path: "/tasks", label: "Tasks" },
    { logo: <CiWallet />, path: "/wallet", label: "Wallet" },
    { logo: <IoBagCheckOutline />, path: "/orders", label: "Orders" },
];

const Sidebar = () => {
    return (
        <div className="fixed h-[calc(100vh-64px)] flex flex-col items-center justify-between pt-2 pb-8 bg-gray-800 w-12 sm:w-16 text-gray-400 text-2xl">
            <div className="flex flex-col gap-8 w-full justify-center items-center">
                {links.map((link) =>
                    link.label === "Home" ? (
                        <NavLink
                            to={link.path}
                            key={link.label}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-sky-500 w-full flex justify-center items-center border-l-2 border-l-sky-500"
                                    : "text-gray-400"
                            }
                        >
                            <div className="cursor-pointer">{link.logo}</div>
                        </NavLink>
                    ) : (
                        <div
                            key={link.label}
                            className="cursor-pointer text-gray-400"
                        >
                            {link.logo}
                        </div>
                    )
                )}
            </div>
            <div>
                <IoMdLogOut />
            </div>
        </div>
    );
};

export default Sidebar;
