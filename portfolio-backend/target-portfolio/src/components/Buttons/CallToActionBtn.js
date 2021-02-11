import React from "react";
import "./Button.css";

const CallToActionButton = ({ children }) => {
  return (
    <div
      onClick={() => {
        const pageOrigin = window.origin;
        const portfolio = "#Lorem_Ipsum";
        const newRef = pageOrigin + portfolio;
        window.location.href = newRef;
      }}
      className="baseBtn btnLight bolderText"
    >
      {children}
    </div>
  );
};

export default CallToActionButton;
