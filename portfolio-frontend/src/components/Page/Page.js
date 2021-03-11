import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Index from "./IndexPage";
import Placeholder from "./Placeholder";
//import About from "./aboutPage";
//import Projets from "./projectsPage";
//import Contact from "./contactPage";

export default () => {
  const { appPage } = useContext(AppContext);
  switch (appPage) {
    case "projects":
      return <Placeholder title="My projects coming soon" />;
    case "contact":
      return <Placeholder title="Contact coming soon" />;
    case "about":
      return <Placeholder title="About me coming soon" />;
    case "blog":
      return <Placeholder title="My blog coming soon" />;
    default:
      return <Index />;
  }
};
