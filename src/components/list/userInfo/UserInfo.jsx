import React from 'react'
import './userInfo.css'

const UserInfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
          <img src="/assets/images/avatar.png" alt="" />
          <h2>Alex Smith</h2>
        </div>
        <div className="icons">
          <img src="/assets/images/more.png" alt="" />
          <img src="/assets/images/video.png" alt="" />
          <img src="/assets/images/edit.png" alt="" />
        </div>
    </div>
  )
}

export default UserInfo