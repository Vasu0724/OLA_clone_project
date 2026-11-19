import React, { useState } from "react";
import Design from "./Design";
import Technology from "./Technology";
import Performance from "./Performance";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Performance");
  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={activeTab === "Performance" ? "active" : ""}
          onClick={() => setActiveTab("Performance")}
        >
          Performance
        </button>
        <button
          className={activeTab === "Design" ? "active" : ""}
          onClick={() => setActiveTab("Design")}
        >
          Design
        </button>
        <button
          className={activeTab === "Technology" ? "active" : ""}
          onClick={() => setActiveTab("Technology")}
        >
          Technology
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "Performance" && <Performance />}
        {activeTab === "Design" && <Design />}
        {activeTab === "Technology" && <Technology />}
      </div>
    </div>
  );
}
