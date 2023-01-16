import React from 'react';
function ProfileImage(props) {
  return (
    <div className='profileimage'>
    <img src={props.image} className="profile" alt="profile"/>
    </div>
  );
}

export default ProfileImage;