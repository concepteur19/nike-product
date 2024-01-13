import React, { useState } from "react";
import "../styles/card.css";

function Card(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const getBackgroundColor = () => {
    if (isMouseOver) return props.hoverColor;
    return "";
  };

  const getTextColor = () => {
    if (isMouseOver) return props.hoverTextColor;
    return "";
  };

  const getRotate = () => {
    if (isMouseOver) return "rotate(30deg)";
    return "";
  };

  return (
    <>
      <div
        className="card"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: getBackgroundColor(), color: getTextColor() }}
      >
        <img className="image" src={props.src} alt={props.alt} style={{ transform: getRotate() }}/>
        <div className="image"></div>
        <p className="name-price">
          <span className="name">{props.name}</span> <br />
          <span className="price" style={{ color: getTextColor() }}>{props.price}</span>
        </p>
      </div>
    </>
  );
}

export default Card;