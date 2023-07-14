type AppProps = {
    setRegion: any;
}

function DestinationsFilter({ setRegion }: AppProps) {
    function openDestinationCheckBox(e: any) {
        e.preventDefault();

        setRegion('');
        const checkBoxSelector: any = document.querySelector('.check-box-page');

        checkBoxSelector.style.display = 'block';
    }
    
    return (
        <>
            
            <div className="filter-container">
                <button onClick={openDestinationCheckBox} className="destination-button filters-components" style={{ width: '100%', height: '100%', fontWeight: 'bold', padding: '0.75rem 0' }}>
                    <span style={{ fontFamily: 'Cherry Bomb One', fontSize: '1rem' }}>+ </span>
                    Desinations
                </button>
            </div>
        </>
    )
}

export default DestinationsFilter;