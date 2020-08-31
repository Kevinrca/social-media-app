import React from 'react'
import '../css/feed.css'

import Post from './Post.jsx'

function Feed() {
    return (
      <div className="feed">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    );
  }
  
  export default Feed;