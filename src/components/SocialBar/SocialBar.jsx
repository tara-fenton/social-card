import React, { Component } from "react";
const images = require.context("../../../public/images/", true);

class SocialBar extends Component {
  render() {
    return (
      <div className="container ">
        <div className="social-bar social-bar-comments">
          <img
            className="social-image"
            src={images(`./social-bar/comments.png`)}
          />
          {this.props.socialBar.comments}
        </div>
        <div className="social-bar social-bar-retweet">
          <img
            className="social-image"
            src={images(`./social-bar/retweet-active.png`)}
          />
          {this.props.socialBar.retweets}
        </div>
        <div className="social-bar social-bar-favorite">
          <img
            className="social-image"
            src={images(`./social-bar/favorite-active.png`)}
          />
          {this.props.socialBar.likes}
        </div>
        <div className="social-bar social-bar-dm">
          <img className="social-image" src={images(`./social-bar/dm.png`)} />
        </div>
      </div>
    );
  }
}
export default SocialBar;
