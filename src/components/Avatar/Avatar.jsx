import React from "react";
const images = require.context("../../../public/images/", true);

const Avatar = (props) => {
  let dynamicImage = images(`./${props.avatarImg}`);
  return <img className="avatar" src={dynamicImage} />;
};
export default Avatar;
