import React from "react";
import "./centerComponent.css";
const CenterComponent = ({ children }) => {
  return <div className="centerMe centerAboveTint">{children}</div>;
};

export default CenterComponent;
