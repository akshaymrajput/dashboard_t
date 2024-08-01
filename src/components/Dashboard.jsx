import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardGrid from "./DashboardGrid";

const Dashboard = () => {
    return (
        <div className="flex flex-grow">
            <Sidebar />
            <section className="pl-16 sm:pl-24 p-6 bg-gray-950 flex-1 text-white">
                <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
                <DashboardGrid />
            </section>
        </div>
    );
};

export default Dashboard;
