import { Link } from 'react-router-dom'
import { useState } from 'react';
import IMAGES from '../src/images/IMAGES';

const style = {
    container: {
        padding: '0.5rem 3rem',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    homePageContainer: {
        width: '100%',
        padding: '0 1rem',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    },
    locationInput: {
        marginBottom: '0.5rem',
        border: 'transparent',
        backgroundColor: '#d1d1d1',
        padding: '0.5rem 1rem',
        outline: 'none',
        color: '#000',
        fontWeight: '500',
        fontSize: '1.125rem'
    },
    callToActionContainer: { 
        width: '15rem',
        backgroundColor: '#d1d1d1',
        padding: '0.25rem',
        borderRadius: '0.3125rem',
    },
    // submitButton: {
    //     borderRadius: '0 0 5px 5px',
    //     display: 'inline-block',
    //     width: '100%',
    //     padding: '0.5rem 1rem',
    //     border: 'none',
    //     fontSize: '1rem',
    //     fontWeight: '600',
    //     backgroundColor: 'rgb(168, 0, 168)'
    // },
    inputAndButtonStyles: {
        height: '3rem'
    },
    searchImageContainer: {
        backgroundColor: '#d1d1d1',
        width: '10%'
    },
    imageStack: {
        width: '80%',
        height: '80%'
    }
}

function Home() {
    const [userInput, setUserInput] = useState('');

    return(
        <div style={style.container} className='home-page-container'>
            <div style={{...style.homePageContainer, marginBottom: '1.5rem'}}>
                <div style={{ margin: '0 auto 1rem'}}>
                    <h2 className='call-to-action-text'>
                        RELAX AND REJUVINATE...
                        <br></br>
                        ALL WHILE MAKING
                        <br />
                        <span style={{ color: 'rgba(0,118,255,1)' }}>
                            MEMORIES THAT WILL LAST A 
                            <br />
                            LIFETIME.
                        </span>
                        
                    </h2>
                </div>
                <div style={style.callToActionContainer}>
                    <form onSubmit={ e => e.preventDefault() }>
                        <input 
                            style={{ ...style.locationInput, ...style.inputAndButtonStyles}} 
                            type="text" name="location" id="location"
                            placeholder='destination'
                            value={userInput}
                            onChange={e => { 
                                setUserInput(e.target.value)
                                // console.log(userInput) 
                            }}  
                        />
                        <Link to={'/app'} state={{ userDestination: userInput }}>
                            <button style={{ ...style.inputAndButtonStyles }} className="call-to-action-button">
                                SEARCH
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
            <div style={style.homePageContainer}>
                <img style={style.imageStack} src={IMAGES.imageStack} alt="" />
            </div>
        </div>
    )
}

export default Home