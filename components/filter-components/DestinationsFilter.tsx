import { getAllDestinations } from "../../utils/ships-data.ts";
import randomString from "../../utils/randomString.ts";
import { useState, useEffect } from 'react';

type AppProps = {
    destinationsPortsFilter: any;
    handleDestinationChange: any;
}

const destinations = getAllDestinations();

function DestinationsFilter({ destinationsPortsFilter, handleDestinationChange }: AppProps) {
    const [dialogDisplay, setDialogDisplay] = useState(false);
    
    function openDestinationsDialog(e: any) {
        e.preventDefault();
        setDialogDisplay(true);
    }

    function closeDialog(e: any) {
        e.preventDefault();
        setDialogDisplay(false);
    }

    useEffect(() => {
        function handleEscapeKey(event: KeyboardEvent) {
          if (event.code === 'Escape') {
            setDialogDisplay(false)
          }
        }
      
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
      }, [])

    return (
        <>
            
            <div className="filter-container">
                <button onClick={openDestinationsDialog} className="destination-button filters-components" style={{ width: '100%', height: '100%', fontWeight: 'bold', padding: '0.75rem 0' }}>
                    <span style={{ fontFamily: 'Cherry Bomb One', fontSize: '1rem' }}>+ </span>
                    Desinations
                </button>
                <dialog open={dialogDisplay} style={{ fontSize: '0.7rem' }}>
                    <button onClick={closeDialog}>X</button>
                    <h2>Where are you going?</h2>
                    {
                        destinations.map((port, index) => {
                            return (
                                <div key={randomString(5)}>
                                    <input 
                                        onChange={handleDestinationChange} 
                                        checked={destinationsPortsFilter.includes(port)} 
                                        type='checkbox' 
                                        name={port} 
                                        value={port} 
                                        id={port}
                                    />
                                    <label htmlFor={port}>{port}</label>
                                </div>
                            )
                        })
                    }
                </dialog>
            </div>
        </>
    )
}

export default DestinationsFilter;