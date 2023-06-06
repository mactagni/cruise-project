import ShipContent from '../components/ShipContent';
import Filters from '../components/Filters';
import ShipDialog from '../components/ShipDialog';
import { data } from '../utils/ships-data.ts';
import { useState } from 'react';
import { compareArrays, compareTripLength, compareBuildYear } from '../utils/compareFunctions.ts';

const style = {
    nothingFound: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'ceneter',
    }
}

// console.log(data);

export default function Content() {
    const [ships, setShips] = useState(data);

    const [departurePortsToFilter, setDeparturePortsToFilter]: any = useState([]);
    const [currentBuildYear, setCurrentBuildYear] = useState(2023)
    const [cruiseLength, setCruiseLength] = useState(1);
    const [destinationsPortsFilter, setDestinationPortsFilter]: any = useState([]);
    const [currentShip, setCurrentShip] = useState(data[0]);
    const [dialogDisplay, setDialogDisplay] = useState(false);

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
    }

    function clearFilters() {
        setShips(data);
        setDeparturePortsToFilter([]);
        setDestinationPortsFilter([]);
    }

    return (
        <div>
            <div>
                <img src="src/assets/moai.png" alt="moai-logo" style={{ width: '2rem', marginRight: '0.5rem' }}/>
                <h1 style={{ fontFamily: 'Lilita One', display: 'inline-block' }}>CRUISE HUB</h1>
            </div>
            <div style={{ padding: '1rem 2rem', display: 'flex' }}>
                <div style={{ float: 'left', width: '100%' }}>
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
                    />
                </div>
                <div style={{ display: 'inline-block', width: 'auto', float: 'right' }}>
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
            </div>
        </div>
    )
}