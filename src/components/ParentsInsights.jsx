import React, { useState } from "react";

const ParentsInsights = () => {
  const [activeTab, setActiveTab] = useState("common-sense");

  const accentColor = "#FDC700";
  const darkText = "#222";

  const tabStyle = (isActive) => ({
    padding: "10px",
    backgroundColor: isActive ? accentColor : "#fff",
    color: isActive ? "#000" : darkText,
    borderRadius: "5px 5px 0 0",
    cursor: "pointer",
    margin: 0,
    flex: 1,
    textAlign: "center",
    transition: "all 0.3s ease",
    borderBottom: isActive ? `3px solid ${accentColor}` : "1px solid #ccc",
    fontWeight: "bold",
  });

  const contentStyle = {
    padding: "15px",
    backgroundColor: "rgba(253, 199, 0, 0.1)",
    borderRadius: "0 0 5px 5px",
    border: `1px solid rgba(253, 199, 0, 0.4)`,
  };

  return (
    <div style={{ width: "100%", fontFamily: "Arial, sans-serif", color: darkText }}>
      <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: accentColor, borderBottom: "2px solid #ccc", paddingBottom: "5px", marginBottom: "10px" }}>
          📊 Parents' Insights
        </h2>

        <div style={{ display: "flex", gap: "5px", margin: "15px 0" }}>
          <h3 style={tabStyle(activeTab === "common-sense")} onClick={() => setActiveTab("common-sense")}>
            Common Sense says
          </h3>
          <h3 style={tabStyle(activeTab === "chatgpt")} onClick={() => setActiveTab("chatgpt")}>
            ChatGPT Says
          </h3>
        </div>

        {activeTab === "common-sense" && (
          <div style={contentStyle}>
            <p><strong>Common Sense Media Review</strong></p>
            <p>
              By Pam Gelman, based on child development research. How do we rate?
              <span style={{ color: "gold", fontSize: "1.2em" }}> ⭐⭐⭐⭐⭐</span>
            </p>
            <p><strong>Age:</strong> 15+</p>
            <p>Amid fun details, teens might miss the message.</p>
          </div>
        )}

        {activeTab === "chatgpt" && (
          <div style={contentStyle}>
            <p><strong>Age:</strong> 15+</p>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li>🎯 Prioritize mental well-being over toxic success</li>
              <li>🧠 Notice subtle pressure of industry-driven conformity</li>
              <li>📚 Compare real-life job struggles with fictional portrayals</li>
              <li>🌈 Analyze diversity, values, and character growth critically</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentsInsights;
