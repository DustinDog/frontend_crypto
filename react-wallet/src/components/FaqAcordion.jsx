import React, { useState } from "react";
import Plus from "../media/plus.svg";

const FaqAccordion = ({ headText, subText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      onClick={toggleOpen}
      style={{
        backgroundBlendMode: "overlay",
        borderRadius: "20px",
        width: "1100px",
        color: "white",
        backdropFilter: "blur(7.5px)",
        border: "6px solid rgba(164, 255, 235, 0.05)",
      }}
    >
      <div
        style={{
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "IBM Plex Sans",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {headText}
          <span
            style={{
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            {isOpen ? "-" : "+"}
          </span>
        </div>
        {isOpen && (
          <div style={{ fontSize: "25px", fontWeight: "300" }}>{subText}</div>
        )}
      </div>
    </div>
  );
};

export default FaqAccordion;
