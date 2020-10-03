import React from "react";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import SocialBar from "../SocialBar/SocialBar";
import TopInfo from "../TopInfo/TopInfo";

const SocialCard = (props) => (
  <div className="container">
    <div>
      <Avatar avatar={props.tweetData.avatar} />
    </div>
    <div>
      <TopInfo
        topInfo={props.tweetData.topInfo}
        title={props.tweetData.title}
      />
      <Card card={props.tweetData.card} title={props.tweetData.title} />
      <SocialBar socialBar={props.tweetData.socialBar} />
    </div>
  </div>
);
export default SocialCard;
