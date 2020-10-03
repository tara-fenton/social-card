import React, { Component } from "react";
const images = require.context("../../../public/images/", true);

class Avatar extends Component {
  render() {
    let dynamicImage = images(`./${this.props.avatar}.jpg`);
    return <img className="avatar" src={dynamicImage} />;
  }
}
export default Avatar;
