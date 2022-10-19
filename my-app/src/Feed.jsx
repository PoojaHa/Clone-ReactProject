import React from 'react'
import "./Feed.css";
import "./App.css";
import TweetBox from './TweetBox';
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
      <div  className='feed-header'>
      <h2>home</h2>
      </div>
       
      {/* tweet🥊  */}
       <TweetBox/>
      {/* post  */}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      {/* post */}
        {/* 📯 post
        post */}
    </div>
  )
}

export default Feed