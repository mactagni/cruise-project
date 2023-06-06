import IMAGES from "../src/images/IMAGES";

const style = {
    container: {
        position: 'absolute',
    },
    images: {
        maxWidth: '20rem',
        borderRadius: '5px',
    }
}

function ShipDialog({ ship, dialogDisplay, closeShipDialog }: { ship: any; dialogDisplay: boolean; closeShipDialog: any }) {
    const { 
        shipName, 
        imageSrc, 
        originPort, 
        destinations, 
        yearBuilt, 
        durations
    } = ship;
    
    return (
        <dialog className="ship-dialog" open={dialogDisplay}>
            <button onClick={closeShipDialog}>X</button>
            <h3>{shipName}</h3>
            <img style={style.images} src={IMAGES[imageSrc]} alt={imageSrc}/>
            <p className="bold-text">{yearBuilt}</p>
            <p><span className="bold-text">Ports:</span> {originPort.join(' | ')}</p>
            <p><span className="bold-text">Destinations:</span> {destinations.join(', ')}</p>
            <p><span className="bold-text">Durations:</span> {durations.join(', ')}</p>
        </dialog>
    )
}

export default ShipDialog;