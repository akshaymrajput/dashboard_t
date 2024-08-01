import React from "react";
import ItemCard from "../components/ItemCard";
import NetProfit from "../components/NetProfit";
import ActivityChart from "../components/ActivityChart";
import Lists from "../components/Lists";
import RecentOrders from "../components/RecentOrders";
import CustomerFeedback from "../components/CustomerFeedback";

const DashboardGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
                <ItemCard />
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
                <NetProfit />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
                <ActivityChart />
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
                <Lists />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
                <RecentOrders />
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
                <CustomerFeedback />
            </div>
        </div>
    );
};

export default DashboardGrid;
