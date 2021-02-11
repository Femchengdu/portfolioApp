import React from "react";
import "./centerComponent.css";
const CenterComponent = ({ children, addTintPosition, externalStyle }) => {
  const overides = externalStyle ? `centerMe ${externalStyle}` : "centerMe";
  return (
    <div className={addTintPosition ? `centerAboveTint ${overides}` : overides}>
      {children}
    </div>
  );
};

export default CenterComponent;
