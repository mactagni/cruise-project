import { getListOfBuildYears } from '../../utils/ships-data.ts';

type AppProps = {
    currentBuildYear: any;
    handleYearBuiltChange: any;
}

const buildYears = getListOfBuildYears();

function YearBultFilter({ currentBuildYear, handleYearBuiltChange }: AppProps) {

    return (
        <div className='filter-container'>
            <p>Introduced: <span style={{ fontFamily: 'Cherry Bomb One' }}>{currentBuildYear}</span></p>
            <input onChange={handleYearBuiltChange} value={currentBuildYear} type="range" name="buildYears" id="buildYears" min={buildYears[0]} max={buildYears[buildYears.length-1]} step="1"/>
        </div>
    )
}

export default YearBultFilter;