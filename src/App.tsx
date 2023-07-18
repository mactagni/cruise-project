import Footer from '../components/Footer';
import IMAGES from './images/IMAGES.ts'
import './App.css'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='main-page'>
        <div style={{ zIndex: '95', width: '100%', textAlign: 'center' }}>
            <Link to={'/'}>
              <img src={IMAGES.moai} alt="moai-logo" style={{ width: '2rem', marginRight: '0.5rem' }}/>
              <h1 style={{ fontFamily: 'Lilita One', display: 'inline-block' }}>
                <span style={{ color: 'rgba(0,118,255,1)'}}>
                  CRUISE
                </span>
                <span className='hub'>
                  HUB
                </span>
              </h1>
            </Link>
        </div>
        <Outlet />
        
      </div>
      <Footer />
    </>
  )
}

export default App
