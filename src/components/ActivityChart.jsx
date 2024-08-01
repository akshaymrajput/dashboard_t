import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FaCaretDown } from "react-icons/fa";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartData = [
    { num: 5, bar: Math.ceil(Math.random() * 15000) },
    { num: 9, bar: Math.ceil(Math.random() * 15000) },
    { num: 11, bar: Math.ceil(Math.random() * 15000) },
    { num: 13, bar: Math.ceil(Math.random() * 15000) },
    { num: 15, bar: Math.ceil(Math.random() * 15000) },
    { num: 17, bar: Math.ceil(Math.random() * 15000) },
    { num: 19, bar: Math.ceil(Math.random() * 15000) },
    { num: 21, bar: Math.ceil(Math.random() * 15000) },
    { num: 23, bar: Math.ceil(Math.random() * 15000) },
    { num: 25, bar: Math.ceil(Math.random() * 15000) },
    { num: 27, bar: Math.ceil(Math.random() * 15000) },
    { num: 30, bar: Math.ceil(Math.random() * 15000) },
    { num: 33, bar: Math.ceil(Math.random() * 15000) },
    { num: 40, bar: Math.ceil(Math.random() * 15000) },
    { num: 44, bar: Math.ceil(Math.random() * 15000) },
    { num: 50, bar: Math.ceil(Math.random() * 15000) },
    { num: 55, bar: Math.ceil(Math.random() * 15000) },
    { num: 59, bar: Math.ceil(Math.random() * 15000) },
    { num: 63, bar: Math.ceil(Math.random() * 15000) },
    { num: 68, bar: Math.ceil(Math.random() * 15000) },
    { num: 73, bar: Math.ceil(Math.random() * 15000) },
    { num: 80, bar: Math.ceil(Math.random() * 15000) },
];

const ActivityChart = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 15000,
                ticks: {
                    stepSize: 5000,
                },
            },
        },
    };

    const data = {
        labels: ChartData.map((item) => item.num),
        datasets: [
            {
                label: "Value",
                data: ChartData.map((item) => item.bar),
                backgroundColor: "#6495ed",
                barPercentage: 0.5,
                barThickness: 20,
                maxBarThickness: 20,
                minBarLength: 2,
                borderWidth: 1,
                borderRadius: 25,
            },
        ],
    };
    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
                <div className="text-lg sm:text-xl font-semibold text-white">
                    Activity
                </div>
                <div className="flex items-center gap-1 bg-gray-700 py-1.5 px-3 rounded-2xl">
                    <span className="text-sm text-gray-300">Weekly</span>
                    <FaCaretDown className="text-gray-300" />
                </div>
            </div>
            <div className="h-48">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default ActivityChart;
