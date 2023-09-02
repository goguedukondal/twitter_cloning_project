import React from "react";
import "./Tweet.css";

import  { useState } from "react";
import { useDispatch } from "react-redux";
function TweetContainer() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const dispatch = useDispatch()
  const sendTweet=(e)=>{
    e.preventDefault();
    const newPost={
      displayName: "Coding Platform",
      username: "Geekster",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1398147289005268993/Qq1XDr_e_400x400.jpg",
    }
    dispatch({type:'ADD_POST',payload:newPost})
    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <img src="https://pbs.twimg.com/profile_images/1398147289005268993/Qq1XDr_e_400x400.jpg" className="profile_img" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <button  onClick={sendTweet} type="submit" className="tweetBox__tweetButton">
          Tweet
        </button>
      </form>
    </div>
  );
}

export default TweetContainer;