import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
        <div className={s.item}>
          <img src='https://i7.pngflow.com/pngimage/110/440/png-art-painting-music-private-collection-stencil-bowie-face-monochrome-human-head-clipart.png'/>
          {props.message}
          <div>
            <span>like</span> {props.likesCount}
          </div>
        </div> 
  )
}

export default Post;