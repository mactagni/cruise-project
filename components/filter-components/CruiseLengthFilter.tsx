type AppProps = {
    cruiseLength: any;
    handleCruiseLengthChange: any;
}

function CruiseLengthFilter({ cruiseLength, handleCruiseLengthChange }: AppProps) {
    return (
        <div className='filter-container'>
            <p>Cruise Length: <span style={{ fontFamily: 'Cherry Bomb One'}}>{cruiseLength}</span></p>
            <input onChange={handleCruiseLengthChange} value={cruiseLength} type="range" name="cruiseLength" id="cruiseLength" min={1} max={15} step="1"/>
        </div>
    )
}

export default CruiseLengthFilter;