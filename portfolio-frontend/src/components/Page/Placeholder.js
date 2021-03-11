import React from "react";
import LandingPage from "../Header/LandingPage";
import MainFooter from "../Footer/MainFooter";

export default ({ title }) => {
  return (
    <>
      <LandingPage />
      <div style={{ height: "84vh" }}>
        {/* Placeholder div */} {title}
      </div>
      <MainFooter />
    </>
  );
};
