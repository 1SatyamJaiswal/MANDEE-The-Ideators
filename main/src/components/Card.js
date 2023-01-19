import React from "react";
import "../styles/card.css"

function Card(props) {
  return (
    <div className="card">
      <div className="item">
        <img className="item-image" src={require("../images/cauliflower.png")} alt="veg"/>
        <p className="item-name">{props.name}</p>
      </div>
      <div>
        <div className="info">
          <p className="info1">Rs.673(8kg)</p>
          <p className="info2">3.5hrs ago</p>
        </div>
        <p className="desc">Uploaded by Shetty Farmers<br></br>Karnataka</p>
      </div>
    </div>
  );
}

export default Card;
