import ShipContent from '../components/ShipContent';
import Filters from '../components/Filters';
import ShipDialog from '../components/ShipDialog';
import MenuButton from '../components/MenuButton';
import { data } from '../utils/ships-data.ts';
import { getAllDestinations } from '../utils/ships-data.ts'; 
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const style = {
    nothingFound: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const destinations = getAllDestinations();

export default function Content() {
    let { state } = useLocation();
    
    const [userDestination ] = useState(state.userDestination)
    const [ships, setShips] = useState(data);
    const [isOpen, setIsOpen] = useState(false);

    function handleIsOpenClick() {
        setIsOpen(!isOpen);
    }
    
    const [departurePortsToFilter, setDeparturePortsToFilter]: any = useState([]);
    const [currentBuildYear, setCurrentBuildYear] = useState(2023)
    const [cruiseLength, setCruiseLength] = useState(1);
    const [destinationsPortsFilter, setDestinationPortsFilter]: any = useState([]);
    const [currentShip, setCurrentShip] = useState(data[0]);
    const [dialogDisplay, setDialogDisplay] = useState(false);
    const [region, setRegion] = useState('')

    function handleCurrentShipIdChange(e: any) {
        e.preventDefault();

        const id = e.target.value;
        const newCurrentShip: any = data.find(ship => ship.id === id)

        if(newCurrentShip) {
            setCurrentShip(newCurrentShip);
            setDialogDisplay(true);
        }
    }

    function closeShipDialog() {
        setDialogDisplay(false);
    }

    function handlePortsChange(e: any) {

        const targetPort: string = e.target.value;
        // console.log(targetPort);

        const isPortSelected = departurePortsToFilter.includes(targetPort);

        if(isPortSelected) {
            setDeparturePortsToFilter((prev: any) => {
                return [...prev].filter(port => {
                    if(port !== targetPort) return port;
                });
            })
            return
        };

        // const newDeparturePortsToFilter: any = departurePortsToFilter.push(targetPort);
        setDeparturePortsToFilter((prev: any) => [...prev, targetPort])

        // console.log(departurePortsToFilter)
    }

    function handleYearBuiltChange(e: any) {
        const newYearBuiltValue = e.target.value;

        setCurrentBuildYear(newYearBuiltValue)
        // console.log(newYearBuiltValue);
    }

    function handleCruiseLengthChange(e: any) {
        const targetCruiseLength = e.target.value;

        setCruiseLength(targetCruiseLength);
        // console.log(cruiseLength);
    }

    function handleDestinationChange(e: any) {
        const targetDestination: string = e.target.value;
        // console.log(targetPort);

        const isDestinationSelected = destinationsPortsFilter.includes(targetDestination);

        if(isDestinationSelected) {
            setDestinationPortsFilter((prev: any) => {
                return [...prev].filter(port => {
                    if(port !== targetDestination) return port;
                });
            })
            return
        };

        setDestinationPortsFilter((prev: any) => [...prev, targetDestination])

        console.log(destinationsPortsFilter)
    }

    function handleFiltersClick(e: any) {
        e.preventDefault();
        
        let updatedShipsList: any[] = [];

        if(departurePortsToFilter.length > 0) {
            departurePortsToFilter.forEach((port: string) => {
                data.forEach(ship => {
                    if(updatedShipsList.includes(ship)) return;

                    if(ship.originPort.includes(port)) updatedShipsList.push(ship);
                })
            })
        }

        if(destinationsPortsFilter.length > 0) {
            destinationsPortsFilter.forEach((destination: string) => {
                data.forEach(ship => {
                    if(updatedShipsList.includes(ship)) return;

                    if(ship.destinations.includes(destination)) updatedShipsList.push(ship)
                })
            })
        }

        console.log(updatedShipsList);
        console.log(`
            destinations: ${destinationsPortsFilter}
            ports: ${departurePortsToFilter}
        `)

        // const shipsFilteredByTripLength = shipsFilteredByDestination.filter(ship => compareTripLength(cruiseLength, ship.durationByNumberOfDays));
        // console.log(shipsFilteredByTripLength)

        // const shipsFilteredByBuildYear = shipsFilteredByTripLength.filter(ship => compareBuildYear(currentBuildYear, ship.yearBuilt));
        // console.log(shipsFilteredByBuildYear)

        updatedShipsList.length > 0 ? setShips(updatedShipsList) : setShips(data);
        // console.log(ships);

        setIsOpen(false);
    }

    function clearFilters() {
        setShips(data);
        setDeparturePortsToFilter([]);
        setDestinationPortsFilter([]);
        setIsOpen(false)
    }

    function updateDataFromUserInput() {
        if(destinationsPortsFilter.length === 0) {
            console.log('Dest filter empty')
            return
        };
        
        let updatedShipsList: any[] = [];
        
        destinationsPortsFilter.forEach((destination: string) => {
            data.forEach(ship => {
                if(updatedShipsList.includes(ship)) return;

                if(ship.destinations.includes(destination)) updatedShipsList.push(ship)
            })
        })

        updatedShipsList.length > 0 ? setShips(updatedShipsList) : setShips(data);
    }

    useEffect(() => {
        if(userDestination === '' || !userDestination) return;
        
        // console.log(userDestination)
        // console.log(destinations)

        // destinations.forEach(destination => {
        //     const destinationToLowerCase = destination.toLowerCase();
        //     const userDestinationToLowerCase = userDestination.toLowerCase();

        //     if(destinationToLowerCase === userDestinationToLowerCase) {
                
        //         setDestinationPortsFilter((prev: any) => [...prev, destination])
        //         console.log(destinationsPortsFilter)
        //     }
        // })

        setDestinationPortsFilter((prev: any) => {
            const userInputFound = destinations.find(destination => destination.toLowerCase() === userDestination.toLowerCase());

            return [...prev, userInputFound]
        })

        console.log(destinationsPortsFilter )

        setTimeout(() => {
            updateDataFromUserInput();
        }, 1000)
    }, [])

    // Set current region for port of departure
    function handleRegionClick(e: any) {
        e.preventDefault();

        const region: string = e.target.value;
        setRegion(region)

        const checkBoxSelector: any = document.querySelector('.check-box-page');

        // Open CheckBox with specified region
        checkBoxSelector.style.display = 'block';
    }

    return (
        <div>
            <MenuButton handleIsOpenClick={handleIsOpenClick} isOpen={isOpen} />
            {/* <div style={{ padding: '1rem 2rem', display: 'flex' }}> */}
                {/* <div style={{ float: 'left', width: 'fit-content' }}> */}
                    <Filters 
                        departurePortsToFilter={departurePortsToFilter}
                        handlePortsChange={handlePortsChange}
                        currentBuildYear={currentBuildYear}
                        handleYearBuiltChange={handleYearBuiltChange}
                        cruiseLength={cruiseLength}
                        handleCruiseLengthChange={handleCruiseLengthChange}
                        destinationsPortsFilter={destinationsPortsFilter}
                        handleDestinationChange={handleDestinationChange}
                        handleFiltersClick={handleFiltersClick}
                        clearFilters={clearFilters}
                        isOpen={isOpen}
                        region={region}
                        setRegion={setRegion}
                        handleRegionClick={handleRegionClick}
                    />
                {/* </div> */}
                <div style={{ width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                    {
                        ships.length === 0
                        ? (
                            <div style={style.nothingFound}>
                                <p>Oops! Nothing found</p>
                            </div>
                        )
                        : <ShipContent 
                            ships={ships}
                            handleCurrentShipIdChange={handleCurrentShipIdChange}
                        />
                    }
                </div>
                <ShipDialog
                    ship={currentShip}
                    dialogDisplay={dialogDisplay}
                    closeShipDialog={closeShipDialog }
                />
            {/* </div> */}
        </div>
    )
}