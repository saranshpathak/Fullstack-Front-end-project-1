import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
import {FiHeart} from 'react-icons/fi';
import {FaRegComment} from 'react-icons/fa';
 import {FiSend} from 'react-icons/fi';
const Post = ({userName,caption,imageUrl}) => {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                className="post_avatar"
                alt="Saransh Pathak"
                src=""
                
                />
                <h3>{userName}</h3>
            </div>
           <div className="post_img">
           <img 
           src={imageUrl} 
           alt="Ronaldo Here" 
           />
           </div> 
           <div className="post_icons">
               <div className="icons"><FiHeart/></div>
               <div className="icons"><FaRegComment/></div>
               <div className="icons"> < FiSend  /></div>
           </div>
            <div className="post_caption">
                  <strong>{userName}</strong>:{caption}
            </div>
        </div>
    )
}

export default Post
