import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { NavBlocks } from "../navBlocks/NavBlocks";
import {
  FaShoppingBag,
  FaTrash,
  FaBullseye,
  FaHamburger,
  FaUtensils,
} from "react-icons/fa";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { IoCaretUpOutline } from "react-icons/io5";
import { Chart } from "primereact/chart";
import "./Dashboard.css";
import { DashboardOrders } from "./DashboardOrders";
import { MdChevronRight } from "react-icons/md";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';


export const Dashboard = () => {
  const blockData = [
    {
      item: "Total Orders",
      revenue: "75",
      indicator: "positive",
      icon: (
        <FaTrash className="text-4xl border border-black p-2 rounded-xl bg-blue-500 bg-opacity-60" />
      ),
    },
    {
      item: "Total Delivered",
      revenue: "70",
      indicator: "negative",
      icon: (
        <FaShoppingBag className="text-4xl border border-black p-2 rounded-xl bg-green-500 bg-opacity-60" />
      ),
    },
    {
      item: "Total Revenue",
      revenue: "$12k",
      indicator: "positive",
      icon: (
        <FaShoppingBag className="text-4xl border border-black p-2 rounded-xl bg-red-500 bg-opacity-60" />
      ),
    },
    {
      item: "Net Profit",
      revenue: "$12k",
      indicator: "negative",
      icon: (
        <FaFilterCircleDollar className="text-4xl border border-black p-2 rounded-xl bg-pink-500 bg-opacity-60" />
      ),
    },
  ];

  const features = [
    { icon: <FaBullseye className="opacity-40"/>, label: "Goals", color: "bg-red-600" },
    { icon: <FaHamburger className="opacity-40"/>, label: "Popular Dishes", color: "bg-blue-600" },
    { icon: <FaUtensils className="opacity-40"/>, label: "Menus", color: "bg-teal-600" },
  ];

  const data = [
    {
      name: '12',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '16',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '22',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '33',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '22',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '44',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '23',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '67',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '98',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '76',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '12',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '133',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '56',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '77',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '12',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '133',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '56',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '77',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  const netProfitData = {
    datasets: [
      {
        data: [300, 100],
        backgroundColor: ["#6f98fd", "#273366"],
        hoverBackgroundColor: ["#6f98fd", "#273366"],
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-900 flex flex-col overflow-auto lg:h-[90vh] md:h-[90vh] sm:h-[90vh] text-white">
      <h1 className="p-2 font-bold text-2xl">Dashboard</h1>
      <div className="grid lg:grid-cols-3 sm: grid-cols-2 md:grid-col-2 gap-6">
        <div className="lg:col-span-2 sm:col-span-2 md:col-span-2 flex flex-wrap justify-between gap-4">
          {blockData.map((e, index) => (
            <NavBlocks
              key={index}
              item={e.item}
              revenue={e.revenue}
              indicator={e.indicator}
              icon={e.icon}
            />
          ))}
        </div>
        <div className="lg:col-span-1 sm:col-span-2 md:col-span-2 grid lg:grid-cols-3 sm: grid-cols-2 md:grid-col-2 p-4 bg-gray-800 rounded-lg shadow-md">
          <div className="lg:col-span-2 sm:col-span-1 md:col-span-1">
            <p className="text-sm mt-1">Net Profit</p>
            <p className="text-3xl font-bold mt-1">$ 6759.25</p>
            <span className="flex text-green-600 mt-1">
              <IoCaretUpOutline className="mt-1" /> 3%{" "}
            </span>
          </div>
          <div className="lg:col-span-1 sm:col-span-1 md:col-span-1 mr-5">
            <Chart
              type="doughnut"
              data={netProfitData}
              className="w-full ml-10 h-24"
            />           
            <p className="text-[8px]">
              These are not exact values these are round of values
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm: grid-cols-2 md:grid-col-2  mt-8 gap-6">
        <div className="lg:col-span-2 sm:col-span-2 md:col-span-2 w-full bg-gray-800 rounded-lg p-1">
          <p className="p-3 text-xl font-bold">Activity</p>
          <ResponsiveContainer width="100%" height="80%">
          <BarChart
              width={900}
              height={200}
              data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5,}}
            >
            <CartesianGrid strokeDasharray="0 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="pv" fill="#8884d8" radius={50} activeBar={<Rectangle stroke="voilet" />} />
          </BarChart>
          </ResponsiveContainer>
         
        </div>
        <div className="lg:col-span-1 sm:col-span-2 md:col-span-2 w-full p-4 bg-gray-800 rounded-lg shadow-md space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${feature.color}`}>
                  {feature.icon}
                </div>
                <p className="text-white">{feature.label}</p>
              </div>
              <MdChevronRight className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      <DashboardOrders />
    </div>
  );
};
