import React from "react";

const TopInfo = (props) => (
  <div>
    <div className="container">
      <div className="top-info-name">{props.topInfo.name}</div>
      <div className="top-info-handle">{props.topInfo.handle} &middot;</div>
      <div className="top-info-date">{props.topInfo.date}</div>
    </div>
    <div className="top-info-title">{props.title}</div>
    <div className="top-info-author">
      <div className="top-info-author-link">
        {`{ author :  `}
        <a href={`http://twitter.com/${props.topInfo.author}`}>
          {props.topInfo.author}
        </a>
        {` }`}
      </div>
    </div>
  </div>
);
export default TopInfo;
