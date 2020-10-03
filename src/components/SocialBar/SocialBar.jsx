import React from "react";

const SocialBar = (props) => (
  <div className="container">
    <div>comments {props.socialBar.comments}</div>
    <div>retweets {props.socialBar.retweets}</div>
    <div>likes {props.socialBar.likes}</div>
    <div>direct messages</div>
  </div>
);
export default SocialBar;
