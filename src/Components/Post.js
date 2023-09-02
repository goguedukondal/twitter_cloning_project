import React from "react";
import './Post.css'
import { FaUserCheck } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';

import { FaRedoAlt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useState } from "react";
function Post({ displayName, username, verified, text, avatar, image }) {
    // const PostData =useSelector((postDT)=>{return postDT})
    const [isFav, setIsFav] = useState(false);
    return (
      <div className="post">
        <div className="post__avatar">
          <img src={avatar} className="profile_img" alt="img_p" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <FaUserCheck className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <FaRegCommentDots fontSize="small" />
            <FaRedoAlt fontSize="small" />
            <FaRegHeart
              fontSize="small"
              className={isFav ? "like" : "unlike"}
              onClick={() => setIsFav(!isFav)}
            />
            <FaCloudUploadAlt fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Post;


