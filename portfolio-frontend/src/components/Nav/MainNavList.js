import React from "react";
import BtnSwitchCurrent from "../Buttons/BtnSwitchCurrent";
const MainNavList = () => {
  return (
    <ul className="mainNavList">
      <span className="btnLi">
        <BtnSwitchCurrent page={"index"}>Home</BtnSwitchCurrent>
      </span>
      <span className="btnLi">
        <BtnSwitchCurrent page={"about"}>About</BtnSwitchCurrent>
      </span>
      <span className="btnLi">
        <BtnSwitchCurrent page={"blog"}>Blog</BtnSwitchCurrent>
      </span>
      <span className="btnLi">
        <BtnSwitchCurrent page={"projects"}>Work</BtnSwitchCurrent>
      </span>
      <span className="btnLi">
        <BtnSwitchCurrent page={"contact"}>Contact</BtnSwitchCurrent>
      </span>
    </ul>
  );
};

export default MainNavList;
