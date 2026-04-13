import React from 'react'
import './welcome.css'

const Welcome = ({ onEnter }) => {
  return (
    <div className="welcome">
      <h1>Hello 👋</h1>
      <h2>Welcome to Dev Chatbot</h2>
      <button onClick={onEnter}>Explore</button>
    </div>
  )
}

export default Welcome