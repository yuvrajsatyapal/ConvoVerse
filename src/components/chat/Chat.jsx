import React, { useState, useEffect, useRef, use } from 'react'
import './Chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => { 
    endRef.current?.scrollIntoView({ behavior: "smooth" }) 
  }, [text]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  }

  console.log(text);

  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      .epr-search-icon-wrapper {
        display: none !important;
      }
      .epr-search-container input {
        padding-left: 12px !important;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])


  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src="/assets/images/avatar.png" alt="" />
          <div className="texts">
            <span>Alex</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/assets/images/phone.png" alt="" />
          <img src="/assets/images/video.png" alt="" />
          <img src="/assets/images/info.png" alt="" />
        </div>
      </div>
      <div className='center'>
        <div className="message">
          <img src="./assets/images/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, perferendis deserunt odit sint delectus minus numquam itaque porro neque sit rem earum explicabo eum nulla libero autem! Reiciendis, debitis fuga.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, perferendis deserunt odit sint delectus minus numquam itaque porro neque sit rem earum explicabo eum nulla libero autem! Reiciendis, debitis fuga.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./assets/images/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, perferendis deserunt odit sint delectus minus numquam itaque porro neque sit rem earum explicabo eum nulla libero autem! Reiciendis, debitis fuga.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, perferendis deserunt odit sint delectus minus numquam itaque porro neque sit rem earum explicabo eum nulla libero autem! Reiciendis, debitis fuga.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className='bottom'>
        <div className="icons">
          <img src="/assets/images/image.png" alt="" />
          <img src="/assets/images/camera.png" alt="" />
          <img src="/assets/images/mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message' value={text} onChange={(e) => setText(e.target.value)} />
        <div className='emoji'>
          <img src="/assets/images/emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} cursor="pointer" />
          {open && (
            <div className='picker'>
              <EmojiPicker onEmojiClick={handleEmoji} searchDisabled={true} />
            </div>
          )}
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat