import React, { Component } from "react";
const images = require.context("../../../public/images/", true);

class Card extends Component {
  render() {
    let dynamicImage = images(`./${this.props.card.image}.jpg`);
    return (
      <div className="card">
        <img className="card-image" src={dynamicImage} />
        <div className="card-info">
          <div className="card-title">{this.props.title}</div>
          <div className="card-description">{this.props.card.description}</div>
          <div className="card-link">
            <a href={`http://${this.props.card.link}`}>
              {this.props.card.link}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
