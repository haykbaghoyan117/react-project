import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg' width='100%' height='150px'/>
      </div>
      <div className={s.descriptionBlock}>
        ava + discription
      </div>
    </div>
  )
}

export default ProfileInfo;