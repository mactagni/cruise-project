const style = {
    menuButtonContainer: {
        position: 'absolute' as 'absolute',
        top: '2rem',
        left: '2rem',
    },
    bars: {
        height: '0.1875rem',
        borderRadius: '0.125rem',
        backgroundColor: '#D9D9D9',
    }, 
    button: {
        border: 'transparent',
        borderRadius: '3px',
        padding: '0.5rem',
    }
}

function MenuButton({ handleIsOpenClick } : { handleIsOpenClick: any}) {
    return (
        <div className="menu-button" style={style.menuButtonContainer}>
            <button onClick={handleIsOpenClick} style={style.button}>
                <div style={{...style.bars, width: '2rem', marginBottom: '0.5rem'}}></div>
                <div style={{...style.bars, width: '1.5rem', marginBottom: '0.5rem'}}></div>
                <div style={{...style.bars, width: '2rem'}}></div>
            </button>
        </div>
    )
}

export default MenuButton;