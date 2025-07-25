import React from 'react'
import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="/assets/images/avatar.png" alt="" />
        <h2>Alex</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./assets/images/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./assets/images/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./assets/images/arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fDB8fHww" alt="" />
                <span>photo_2.png</span>
              </div>
              <img src="./assets/images/download.png" className='icon' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fDB8fHww" alt="" />
                <span>photo_2.png</span>
              </div>
              <img src="./assets/images/download.png" className='icon' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fDB8fHww" alt="" />
                <span>photo_2.png</span>
              </div>
              <img src="./assets/images/download.png" className='icon' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fDB8fHww" alt="" />
                <span>photo_2.png</span>
              </div>
              <img src="./assets/images/download.png" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fDB8fHww" alt="" />
                <span>photo_2.png</span>
              </div>
              <img src="./assets/images/download.png" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fDB8fHww" alt="" />
                <span>photo_2.png</span>
              </div>
              <img src="./assets/images/download.png" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fDB8fHww" alt="" />
                <span>photo_2.png</span>
              </div>
              <img src="./assets/images/download.png" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fDB8fHww" alt="" />
                <span>photo_2.png</span>
              </div>
              <img src="./assets/images/download.png" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fDB8fHww" alt="" />
                <span>photo_2.png</span>
              </div>
              <img src="./assets/images/download.png" className='icon'/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./assets/images/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail