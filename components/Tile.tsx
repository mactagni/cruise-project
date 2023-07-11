import IMAGES from '../src/images/IMAGES';

function Tile({ ship, handleCurrentShipIdChange }: any) {
    const { shipName, imageSrc, yearBuilt, id } = ship;

    const style = {
        container: {
            paddingBottom: '1rem',
            margin: '0.5rem 0.3rem',
            borderRadius: '0.4rem',
            width: '10rem',
            backgroundColor: '#1E1E1E',
        },
        shipNameStyles: { fontWeight: '600'},
        shipYearStyles: {
            fontFamily: 'Lilita One',
            fontSize: '1.5rem',
            color: '#D9D9D9'
        },
        expandButton: {
            fontWeight: '700',
            width: '80%',
            height: '2.25rem',
            border: 'transparent',
            borderRadius: '0.5rem',
        }
    }

    // function yearBuiltColor(year: string) {
    //     const yearFromStringToNumber: number = Number(year);

    //     if(yearFromStringToNumber < 2000) return '#E00000';
    //     if(yearFromStringToNumber < 2010) return '#E0BF00';
    //     if(yearFromStringToNumber < 2020) return '#078F00';

    //     return '#30008F'
    // }

    return (
        <div style={style.container}>
            <img id='cruise-ship-images' src={IMAGES[imageSrc]} alt={imageSrc}/>
            <p style={style.shipNameStyles}>{shipName}</p>
            <p style={style.shipYearStyles}>{yearBuilt}</p>
            <button
                style={style.expandButton}
                onClick={handleCurrentShipIdChange}
                value={id}
            >
                VIEW
            </button>
            {/* <p>{cruiseOwner}</p> */}
        </div>
    )
}

export default Tile;