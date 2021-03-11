import React, { useContext } from "react";
import HeaderLandingContent from "../Header/HeaderLandingContent";
import CenterComponent from "../Containers/CenterComponent";
import MainNavContainer from "../Nav/MainNavContainer";
import MainNavLogo from "../Nav/MainNavLogo";
import MainNavList from "../Nav/MainNavList";
import AppContext from "../../context/AppContext";
import "./landing.css";
const LandingPage = () => {
  const { appPage } = useContext(AppContext);
  return (
    <header
      id="header-home"
      className={appPage === "index" ? "backgroundImg" : "backgroundImgNoIndex"}
    >
      <CenterComponent addTintPosition={true}>
        <MainNavContainer>
          <MainNavLogo />
          <MainNavList />
        </MainNavContainer>

        {appPage === "index" ? <HeaderLandingContent /> : null}
      </CenterComponent>
    </header>
  );
};

export default LandingPage;
