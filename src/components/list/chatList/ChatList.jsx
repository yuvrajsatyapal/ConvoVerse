import React, { useState } from 'react'
import './chatList.css'

const chatList = () => {

  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatList'>
      <div className="search">
        <div className='search-bar'>
          <input type="text" placeholder='Search' />
          <img src="/assets/images/search.png" alt="" />
        </div>
        <img src={addMode ? "/assets/images/minus.png" : "/assets/images/plus.png"} className='add' alt="" onClick={() => setAddMode((prev) => !prev)} />
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className='item'>
        <img src="/assets/images/avatar.png" alt="" />
        <div className='texts'>
          <span>Alex</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
    </div>
  )
}

export default chatList