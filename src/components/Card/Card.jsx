import React, { Component } from "react";
const images = require.context("../../../public/images/", true);

class Card extends Component {
  render() {
    let dynamicImage = images(`./${this.props.card.image}.jpg`);
    return (
      <div className="container">
        <img src={dynamicImage} />
        <div>{this.props.card.info}</div>
        <div>{this.props.card.description}</div>
        <div>{this.props.card.link}</div>
      </div>
    );
  }
}
export default Card;
