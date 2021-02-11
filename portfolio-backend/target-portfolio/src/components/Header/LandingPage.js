import React from "react";
import HeaderLandingContent from "../Header/HeaderLandingContent";
import CenterComponent from "../Containers/CenterComponent";
import MainNavContainer from "../Nav/MainNavContainer";
import MainNavLogo from "../Nav/MainNavLogo";
import "./landing.css";
const LandingPage = () => {
  return (
    <header id="header-home">
      <div className="backgroundImg">
        <CenterComponent addTintPosition={true}>
          <MainNavContainer>
            <MainNavLogo />
            <div style={{ width: "50px" }}>
              {/* This is a placeholder for the navigation links */}
            </div>
          </MainNavContainer>
          <HeaderLandingContent />
        </CenterComponent>
      </div>
    </header>
  );
};

export default LandingPage;
