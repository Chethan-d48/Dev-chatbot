import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Welcome from './components/welcome/welcome'
import Login from './components/Login/Login'

const App = () => {
  const [screen, setScreen] = useState('welcome')

  return (
    <>
      {screen === 'welcome' && (
        <Welcome onEnter={() => setScreen('login')} />
      )}

      {screen === 'login' && (
        <Login onLoginSuccess={() => setScreen('chat')} />
      )}

      {screen === 'chat' && (
        <div className='app'>
          <Sidebar />
          <Main />
        </div>
      )}
    </>
  )
}

export default App