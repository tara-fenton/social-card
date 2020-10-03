import React from "react";

const TopInfo = (props) => (
  <div>
    <div className="container">
      <div>{props.topInfo.name}</div>
      <div>{props.topInfo.handle}</div>&middot;
      <div>{props.topInfo.date}</div>
    </div>
    <div>
      <div>{props.title}</div>
    </div>
    <div>
      <div>
        {`author : { `}
        <a href={`http://twitter.com/${props.topInfo.author}`}>
          {props.topInfo.author}
        </a>
        {` }`}
      </div>
    </div>
  </div>
);
export default TopInfo;
