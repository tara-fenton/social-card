import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import SocialBar from "./components/SocialBar/SocialBar";
import TopInfo from "./components/TopInfo/TopInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweetData: {
        avatar: "",
        title: "Learning React? Start Small",
        topInfo: {
          name: "The Practical Dev",
          handle: "@ThePracticalDev",
          date: "Sep 10",
          author: "@dceddia",
        },
        card: {
          image: "",
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
        <TopInfo
          topInfo={this.state.tweetData.topInfo}
          title={this.state.tweetData.title}
        />
        <Card
          card={this.state.tweetData.card}
          title={this.state.tweetData.title}
        />
        <SocialBar socialBar={this.state.tweetData.socialBar} />
      </div>
    );
  }
}

export default App;
