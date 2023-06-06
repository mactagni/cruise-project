import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const style = {
  link: {
    textDecoration: 'none',
    padding: '0.5rem 1rem'
  }
}

function App() {

  return (
    <>
      <div className='main-page'>
        <div>
            <img src="src/assets/moai.png" alt="moai-logo" style={{ width: '2rem', marginRight: '0.5rem' }}/>
            <h1 style={{ fontFamily: 'Lilita One', display: 'inline-block' }}>CRUISE HUB</h1>
        </div>
        <button>
          <a href="/app">LETS CRUISE!</a>
        </button>
      </div>
    </>
  )
}

export default App
