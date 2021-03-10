import React from "react";
import CenterComponent from "../Containers/CenterComponent";
import "./projectContainer.css";
import item1 from "../../assets/img/item1.png";
import item2 from "../../assets/img/item2.png";
import item3 from "../../assets/img/item3.png";

const ProjectsContainer = () => {
  return (
    <section id="Lorem_Ipsum" className="sectionWorkA">
      <CenterComponent>
        <h2 className="sectionTitle">My wrork</h2>
        <div className="bottomLine"></div>
        <p className="lead">Check out some of my projects</p>
        <div className="items">
          <div className="item">
            <div className="itemImage">
              <img className="image" src={item1} alt="" />
            </div>
            <div className="itemText">
              <div className="itemTextWrap">
                <p className="itemTextCategory">Landing Pages</p>
                <h2 className="itemTextTitle">Custom Landing Pages</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemImage">
              <img className="image" src={item2} alt="" />
            </div>
            <div className="itemText">
              <div className="itemTextWrap">
                <p className="itemTextCategory">Themes</p>
                <h2 className="itemTextTitle">Custom Shopify Themes</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemImage">
              <img className="image" src={item3} alt="" />
            </div>
            <div className="itemText">
              <div className="itemTextWrap">
                <p className="itemTextCategory">Store</p>
                <h2 className="itemTextTitle">Shopify Store Setup </h2>
              </div>
            </div>
          </div>
        </div>
      </CenterComponent>
    </section>
  );
};

export default ProjectsContainer;
