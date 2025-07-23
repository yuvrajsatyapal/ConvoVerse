import React, { useState } from 'react'
import './chatList.css'

const chatList = () => {

  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatList'>
      <div className="search">
        <div className='search-bar'>
          <img src="/assets/images/search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? "/assets/images/minus.png" : "/assets/images/plus.png"} className='add' alt="" onClick={() => setAddMode((prev) => !prev)} />
      </div>
    </div>
  )
}

export default chatList