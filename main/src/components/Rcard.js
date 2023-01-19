import React from "react";
import "../styles/rcard.css";

function Rcard(props) {
  return (
    <div className="r-card">
      <div className="farmer">
        <img className="farmer-image" src={require("../images/farmer.png")} alt="veg" />
        <p className="farmer-name">{props.name}</p>
      </div>
      <div>
        <div className="farmer-info">
          <p style={{color : "rgba(18, 56, 18, 1)"}} >45 yrs Old, SirsaGanj, U.P.</p>
          <p>
            AbhiramJi has been farming potatoes (aloo) for the last 25 yrs and
            knows how to get the best yield.{" "}
          </p>
        </div>
        <p className="rating">⭐⭐⭐</p>
      </div>
    </div>
  );
}

export default Rcard;
