import React from "react";

const Card = (props) => (
  <div className="social-bar">
    <div>{props.card.info}</div>
    <div>{props.card.description}</div>
    <div>{props.card.link}</div>
  </div>
);
export default Card;
