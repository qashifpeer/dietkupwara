"use client";

import { useState } from "react";
import Orders from "./Orders";
import Downloads from "./Downloads";
// import { , Downloads  } from "@/components";




export default function LatestSection() {
  const [activeTab, setActiveTab] = useState<"orders" | "downloads">("orders");

  return (
    <div className="w-full max-w-7xl mx-auto bg-white shadow-md">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex-2 py-2 px-4 text-center text-sm font-medium ${
            activeTab === "orders"
              ? "bg-emerald-700 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => setActiveTab("downloads")}
          className={`flex-1 py-2 px-4 text-left text-sm font-medium ${
            activeTab === "downloads"
              ? "bg-emerald-700 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Downloads
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "orders" ? <Orders /> : <Downloads />}
      </div>
    </div>
  );
}
