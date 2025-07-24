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
      <div className='bottom'>
        <div className="icons">
          <img src="/assets/images/image.png" alt="" />
          <img src="/assets/images/camera.png" alt="" />
          <img src="/assets/images/mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message' />
        <div className='emoji'>
          <img src="/assets/images/emoji.png" alt="" />
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat