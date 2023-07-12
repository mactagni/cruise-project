const style = {
    menuButtonContainer: {
        position: 'fixed' as 'fixed',
        top: '2rem',
        left: '2rem'
    },
    button: {
        border: 'transparent',
        borderRadius: '3px',
        padding: '1rem',
    }
}

function MenuButton({ handleIsOpenClick, isOpen } : { handleIsOpenClick: any; isOpen: boolean; }) {
    return (
        <div className="menu-button" style={style.menuButtonContainer}>
            <button onClick={handleIsOpenClick} style={style.button}>
                <div>
                    <i style={{ display: isOpen ? 'none' : 'block' }} className="arrow right"></i>
                    <i style={{ display: isOpen ? 'block' : 'none' }} className="arrow left"></i>
                </div>
            </button>
        </div>
    )
}

export default MenuButton;