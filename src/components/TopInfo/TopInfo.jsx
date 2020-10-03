import React from "react";

const TopInfo = (props) => (
  <div className="social-bar">
    <div>{props.topInfo.name}</div>
    <div>{props.topInfo.handle}</div>
    <div>{props.topInfo.date}</div>
    <div>{props.topInfo.author}</div>
  </div>
);
export default TopInfo;
