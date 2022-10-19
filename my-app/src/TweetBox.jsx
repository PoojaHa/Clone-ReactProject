import { Button } from "@mui/material";
import React from "react";
import "./App.css";
import Avatar from "@mui/material/Avatar";
import "./TweetBox.css";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox_input">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <input
            type="text"
            className="tweetbox"
            placeholder="enter somethong..."
          />
        </div>
        <input
            type="text"
            className="tweetBoximg"
            placeholder="Optional:Enter the URL..."
          />
        <Button className="tweetboxbtn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
