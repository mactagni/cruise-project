import Tile from './Tile.tsx';

type AppProps = {
    ships: any;
    handleCurrentShipIdChange: any;
}

const style = {
    contentStyles: {
        display: 'flex',
        // flexWrap: 'wrap'
    }
}

function ShipContent({ ships, handleCurrentShipIdChange }: AppProps) {
    // console.log(data);
    return (
        <div className='cruise-ship-container'>
            {
                ships.map((ship: {
                    shipName: string;
                    cruiseOwner: string;
                    id: string;
                    imageSrc: string;
                    originPort: string[];
                    destinations: string[];
                    yearBuilt: string;
                    refurbished: string;
                    durations: string[];
                    durationByNumberOfDays: number[];
                    onboardActivities: never[];
                    onboardDining: never[];
                }) => {
                    if(ship.shipName === 'pride-of-america') {
                        ship.shipName = 'Pride of America';
                    } else if(ship.shipName === 'mardi-gras') {
                        ship.shipName = 'Mardi Gras';
                    } else {
                        ship.shipName = ship.shipName.charAt(0).toUpperCase() + ship.shipName.slice(1);
                    }

                    return (
                        <div key={ship.id}>
                            <Tile ship={ship} handleCurrentShipIdChange={handleCurrentShipIdChange} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShipContent;