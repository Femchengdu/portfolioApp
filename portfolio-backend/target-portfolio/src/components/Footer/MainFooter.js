import React from "react";
import CenterComponent from "../Containers/CenterComponent";
import {
  //faFacebook,
  //faInstagram,
  //faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./mainFooter.css";

const MainFooter = () => {
  return (
    <footer className="mainFooter">
      <CenterComponent externalStyle="footerContentContainer">
        <p>Copyright &copy; 2020. All Rights Reserved</p>
        <div>
          {/* Other socials can be added later
          <FontAwesomeIcon
            className="styledFontAwesomeIcons"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="styledFontAwesomeIcons"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="styledFontAwesomeIcons"
            icon={faInstagram}
          /> */}
          <FontAwesomeIcon
            className="styledFontAwesomeIcons"
            icon={faLinkedin}
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/samuel-ajayi-full-stack/";
            }}
          />
        </div>
      </CenterComponent>
    </footer>
  );
};

export default MainFooter;
