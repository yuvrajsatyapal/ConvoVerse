import React from 'react'
import './Chat.css'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src="/assets/images/avatar.png" alt="" />
          <span className="texts">Alex</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="icons">
          <img src="/assets/images/phone.png" alt="" />
          <img src="/assets/images/video.png" alt="" />
          <img src="/assets/images/info.png" alt="" />
        </div>
      </div>
      <div className='center'></div>
      <div className='bottom'></div>
    </div>
  )
}

export default Chat