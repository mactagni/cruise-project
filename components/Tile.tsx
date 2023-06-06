import IMAGES from '../src/images/IMAGES';

const style = {
    container: {
        paddingBottom: '1.5rem',
        margin: '0.5rem 0.3rem',
        borderRadius: '0.4rem',
        width: '10rem',
        height: '12rem',
        backgroundColor: '#1E1E1E',
    },
}

function Tile({ ship, handleCurrentShipIdChange }: any) {
    const { shipName, imageSrc, yearBuilt, id, cruiseOwner } = ship;

    function yearBuiltColor(year: string) {
        const yearFromStringToNumber: number = Number(year);

        if(yearFromStringToNumber < 2000) return '#E00000';
        if(yearFromStringToNumber < 2010) return '#E0BF00';
        if(yearFromStringToNumber < 2020) return '#078F00';

        return '#30008F'
    }

    return (
        <div style={style.container}>
            <img id='cruise-ship-images' src={IMAGES[imageSrc]} alt={imageSrc}/>
            <button 
                style={{
                    width: '1.75rem',
                    // border: 'transparent',
                    // backgroundColor: 'transparent',
                    position: 'sticky',
                    float: 'right',
                    // right: '1rem',
                    top: '0.25rem',
                }}
                onClick={handleCurrentShipIdChange}
                value={id}
            >
                {/* <img src="src/assets/expand-arrows.png" alt="expand-button" style={{ width: '100%', opacity: '0.6'}} /> */}
            </button>
            <p style={{ fontWeight: '600'}}>{shipName}</p>
            <p style={{
                fontFamily: 'Lilita One',
                fontSize: '1.5rem',
                color: yearBuiltColor(yearBuilt)
            }}>{yearBuilt}</p>
            {/* <p>{cruiseOwner}</p> */}
        </div>
    )
}

export default Tile;