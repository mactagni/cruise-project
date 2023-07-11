import DeparturePortFilter from './filter-components/DeparturePortFilter';
import DestinationsFilter from './filter-components/DestinationsFilter';

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
}

function Filters({
    departurePortsToFilter,
    handlePortsChange,
    destinationsPortsFilter,
    handleDestinationChange,
    handleFiltersClick,
    clearFilters,
    isOpen
}: AppProps) {
    return (
        <div style={{
                height: '100%',
                width: '100%',
                marginRight: '1.2rem', 
                position: 'fixed', 
                zIndex: '99',
                display: isOpen ? 'flex' : 'none',
                justifyContent: 'center',
                backgroundColor: '#242424',
            }}
            className='filters-menu'
        >
            <div>
                <div>
                    <input onClick={handleFiltersClick} className='filter-button filter-components' type="button" value="Apply" />
                </div>
                <form>
                    <DeparturePortFilter
                        departurePortsToFilter={departurePortsToFilter}
                        handlePortsChange={handlePortsChange}
                    />
                    <DestinationsFilter 
                        destinationsPortsFilter={destinationsPortsFilter}
                        handleDestinationChange={handleDestinationChange}
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
            </div>
        </div>
    )
}

export default  Filters;