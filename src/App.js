import React, { Component } from "react";
import "./App.css";
import SocialCard from "./components/SocialCard/SocialCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweetData: {
        avatar: "avatar-dev",
        title: "Learning React? Start Small.",
        topInfo: {
          name: "The Practical Dev",
          handle: "@ThePracticalDev",
          date: "Sep 10",
          author: "@dceddia",
        },
        card: {
          image: "social-card-image",
          description:
            "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
          link: "dev.to",
        },
        socialBar: {
          comments: 2,
          retweets: 47,
          likes: 190,
        },
      },
    };
  }

  render() {
    return (
      <div className="App">
        <SocialCard tweetData={this.state.tweetData} />
      </div>
    );
  }
}

export default App;
