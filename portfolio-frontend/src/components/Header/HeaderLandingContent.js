import React from "react";
import "./headingContent.css";
import CallToActionButton from "../Buttons/CallToActionBtn";
const HeaderLandingContent = () => {
  return (
    <div className="headerContent">
      <h1 className="landingHeading">I Am Samuel The Full Stack Developer</h1>
      <p className="headerContentLead">
        I specialize in JavaScript Web developemnt
      </p>
      <CallToActionButton>View My Work</CallToActionButton>
    </div>
  );
};

export default HeaderLandingContent;
