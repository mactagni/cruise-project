import DeparturePortFilter from './filter-components/DeparturePortFilter';
import DestinationsFilter from './filter-components/DestinationsFilter';
import CheckBox from './filter-components/CheckBox';

type AppProps = {
    departurePortsToFilter: any;
    handlePortsChange: any;
    currentBuildYear: any;
    handleYearBuiltChange: any;
    cruiseLength: any;
    handleCruiseLengthChange: any;
    destinationsPortsFilter: any;
    handleDestinationChange: any;
    handleFiltersClick: any;
    clearFilters: any;
    isOpen: boolean;
    region: string;
    setRegion: any;
    handleRegionClick: any;
}

function Filters({
    departurePortsToFilter,
    handlePortsChange,
    destinationsPortsFilter,
    handleDestinationChange,
    handleFiltersClick,
    clearFilters,
    isOpen,
    region,
    setRegion,
    handleRegionClick
}: AppProps) {
    return (
        <div style={{
                height: '100vh',
                // margin: '0 1.2rem', 
                position: 'fixed',
                left: '0',
                zIndex: '99',
                display: isOpen ? 'flex' : 'none',
                justifyContent: 'center',
                backgroundColor: '#242424',
                padding: '0 2rem'
            }}
            className='filters-menu'
        >
            <div>
                <div>
                    <input onClick={handleFiltersClick} className='filter-button filter-components' type="button" value="Apply" />
                </div>
                <form>
                    <DeparturePortFilter
                        handleRegionClick={handleRegionClick}
                    />
                    <DestinationsFilter 
                        setRegion={setRegion}
                    />
                    {/* <YearBultFilter 
                        currentBuildYear={currentBuildYear}
                        handleYearBuiltChange={handleYearBuiltChange}
                    />
                    <CruiseLengthFilter 
                        cruiseLength={cruiseLength}
                        handleCruiseLengthChange={handleCruiseLengthChange}
                    /> */}
                </form>
                <div>
                    <input onClick={clearFilters} className='filter-button clear-filters-button filter-components' type="button" value="Clear" />
                </div>
                <CheckBox
                    region={region}
                    handlePortsChange={handlePortsChange}
                    departurePortsToFilter={departurePortsToFilter}
                    handleDestinationChange={handleDestinationChange}
                    destinationsPortsFilter={destinationsPortsFilter}
                />
            </div>
        </div>
    )
}

export default  Filters;