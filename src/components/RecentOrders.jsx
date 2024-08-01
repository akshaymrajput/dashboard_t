import React from "react";

const data = [
    {
        avatar: "https://i.pravatar.cc/150?img=3",
        name: "Wade Warren",
        orderNo: 15478256,
        amount: 124.0,
        status: "Delivered",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=5",
        name: "Jane Doe",
        orderNo: 15864329,
        amount: 99.99,
        status: "Pending",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=7",
        name: "John Smith",
        orderNo: 16235487,
        amount: 150.5,
        status: "Cancelled",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=9",
        name: "Emily Johnson",
        orderNo: 16473829,
        amount: 75.25,
        status: "Delivered",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=11",
        name: "Michael Brown",
        orderNo: 16829475,
        amount: 200.0,
        status: "Pending",
    },
    {
        avatar: "https://i.pravatar.cc/150?img=15",
        name: "Sarah Davis",
        orderNo: 17364783,
        amount: 185.75,
        status: "Cancelled",
    },
];

const RecentOrders = () => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto h-full">
            <div className="text-xl font-semibold text-white mb-2">
                Recent Orders
            </div>
            <div className="min-w-full grid grid-cols-1 sm:grid-cols-4 text-white text-left mb-2">
                <div className="hidden sm:block font-bold py-2">Customer</div>
                <div className="hidden sm:block font-bold py-2">Order No.</div>
                <div className="hidden sm:block font-bold py-2">Amount</div>
                <div className="hidden sm:block font-bold py-2">Status</div>
            </div>
            <div className="space-y-4">
                {data.map((order) => (
                    <div
                        key={order.orderNo}
                        className="grid grid-cols-1 sm:grid-cols-4 items-center border-t pt-2 border-gray-700"
                    >
                        <div className="flex items-center mb-2 sm:mb-0">
                            <img
                                src={order.avatar}
                                alt={order.name}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <div className="sm:hidden space-y-2">
                                <div className="text-gray-300">
                                    {order.name}
                                </div>
                                <div className="text-gray-400">
                                    Order No. {order.orderNo}
                                </div>
                                <div className="text-gray-300">
                                    ${order.amount.toFixed(2)}
                                </div>
                                <div
                                    className={`inline-block px-2 py-1 rounded-full text-sm font-semibold text-gray-300 bg-opacity-60 ${
                                        order.status === "Delivered"
                                            ? "bg-green-500 text-green-400"
                                            : order.status === "Pending"
                                            ? "bg-yellow-500 text-yellow-400"
                                            : "bg-red-500 text-red-400"
                                    }`}
                                >
                                    {order.status}
                                </div>
                            </div>
                            <div className="hidden sm:block text-gray-300">
                                <div className="text-sm">{order.name}</div>
                            </div>
                        </div>
                        <div className="hidden sm:block text-gray-300">
                            {order.orderNo}
                        </div>
                        <div className="hidden sm:block text-gray-300">
                            ${order.amount.toFixed(2)}
                        </div>
                        <div className="hidden sm:block">
                            <div
                                className={`inline-block px-2 py-1 rounded-full text-sm text-gray-300 bg-opacity-60 ${
                                    order.status === "Delivered"
                                        ? "bg-green-500 text-green-400"
                                        : order.status === "Pending"
                                        ? "bg-yellow-500 text-yellow-400"
                                        : "bg-red-500 text-red-400"
                                }`}
                            >
                                {order.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentOrders;
