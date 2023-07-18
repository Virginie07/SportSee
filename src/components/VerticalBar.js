import React from "react";
import "../styles/VerticalBar.css";
import IconMedit from "../img/iconMedit.png";
import IconNat from "../img/iconNat.png";
import IconBike from "../img/iconBike.png";
import IconHalt from "../img/iconHalt.png";

const VerticalBar = () => {
  return (
    <div className="verticalBar">
      <div className="verticalBar__iconList">
        <div className="verticalBar__icon">
          <img className="verticalBar__icon--img" src={IconMedit} alt="" />
        </div>

        <div className="verticalBar__icon">
          <img className="verticalBar__icon--img" src={IconNat} alt="" />
        </div>

        <div className="verticalBar__icon">
          <img className="verticalBar__icon--img" src={IconBike} alt="" />
        </div>

        <div className="verticalBar__icon">
          <img className="verticalBar__icon--img" src={IconHalt} alt="" />
        </div>
      </div>

      <div className="verticalBar__copy">
        <p className="verticalBar__copy--para">Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
};

export default VerticalBar;
