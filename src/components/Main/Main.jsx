import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
import ReactMarkdown from "react-markdown";

const Main = () => {
  const { onSent, recentPrompt, resultData, loading, input, setInput, showResult } = useContext(Context)

  return (
    <div className='main'>
      <div className='nav'>
        <p>ChatBot</p>
        <img src={assets.my_logo} alt="" />
      </div>

      <div className="main-container">

        {!showResult ? (
          <>
            <div className='greet'>
              <p><span>Hello ,Welcome</span></p>
              <p>How can I help you</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>What motivates you to keep going every single day</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card">
                <p>How do you stay focused during difficult situations</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>Why is consistency more important than talent sometimes</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div className="card">
                <p>What are your goals for the next five years</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className='result-title'>
              <img src={assets.my_logo} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className='result-data'>
              <img src={assets.gemini_icon} alt="" />

              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <ReactMarkdown>{resultData}</ReactMarkdown>
              )}

            </div>
          </div>
        )}

        <div className='main-value'>
          <div className='search-box'>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Ask Anything'
            />

            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>

          <p className='bottom-info'>
            Instant answers creative ideas and helpful guidance anytime anywhere.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Main