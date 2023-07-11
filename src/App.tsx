import Footer from '../components/Footer';
import './App.css'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='main-page'>
        <div>
            <Link to={'/'}>
              <img src="src/assets/moai.png" alt="moai-logo" style={{ width: '2rem', marginRight: '0.5rem' }}/>
              <h1 style={{ fontFamily: 'Lilita One', display: 'inline-block' }}>
                <span style={{ color: 'rgba(0,118,255,1)'}}>
                  CRUISE
                </span>
                <span style={{ color: '#FFF'}}>
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
