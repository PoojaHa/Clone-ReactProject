import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import PublishIcon from "@mui/icons-material/Publish";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Post = ({ displayname, username, verified, text, image }) => {
  return (
    <div className="post">
      <div className="post_Avatar">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
      <div className="post-Body">
        <div className="post-header">
          <div className="post-header-Text">
            <h3>
              PoojaBarki{""}
              <span className="post-hederSpecial">
                <CheckCircleIcon className="post_badge" /> @PoojaBarki
              </span>
            </h3>
          </div>
          <div className="post-description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              mollitia ab enim id maiores ullam deserunt.
            </p>
          </div>
          <div className="post-img">
            <img src={process.env.PUBLIC_URL + "/sun-rise.jpg"} />
         
          </div>
          <div className="post-footer">
            <ChatBubbleIcon fontSize="small" />
            <EventRepeatIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
