import React from "react";
import HeaderLandingContent from "../Header/HeaderLandingContent";
import CenterComponent from "../Containers/CenterComponent";
import MainNavContainer from "../Nav/MainNavContainer";
import MainNavLogo from "../Nav/MainNavLogo";
import MainNavList from "../Nav/MainNavList";
import "./landing.css";
const LandingPage = () => {
  return (
    <header id="header-home">
      <div className="backgroundImg">
        <CenterComponent addTintPosition={true}>
          <MainNavContainer>
            <MainNavLogo />
            <MainNavList />
          </MainNavContainer>
          <HeaderLandingContent />
        </CenterComponent>
      </div>
    </header>
  );
};

export default LandingPage;
