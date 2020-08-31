import React from 'react'
import '../css/post.css'

function Post() {
    return (
      <div className="post">
        <h3 className="post__name">Kévin Rocha</h3>

        <div className="post__content">
            <p>Welcome to my social media app !</p>
        </div>

        <div className="post__interactions">
            <div className="likesCount">80 likes</div>
            <div className="commentsCount">5 comments</div>
            <div className="commentList">
                <div className="comment">
                    <h5 className="comment__name">Jean Michel</h5>
                    <p className="comment__text">Trop content d'être là.</p>
                </div>

                <div className="comment">
                    <h5 className="comment__name">Bill</h5>
                    <p className="comment__text">ça manque de style ici</p>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Post;