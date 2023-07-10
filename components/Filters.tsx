import { useState } from 'react';
import DeparturePortFilter from './filter-components/DeparturePortFilter';
import YearBultFilter from './filter-components/YearBuiltFilter';
import CruiseLengthFilter from './filter-components/CruiseLengthFilter';
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
}

const style ={
    menuStyles: {
        marginRight: '1.2rem', 
        position: 'fixed', 
        zIndex: '99' 
    }
}

function Filters({
    departurePortsToFilter,
    handlePortsChange,
    currentBuildYear,
    handleYearBuiltChange,
    cruiseLength,
    handleCruiseLengthChange,
    destinationsPortsFilter,
    handleDestinationChange,
    handleFiltersClick,
    clearFilters
}: AppProps) {
    return (
        <div style={{
            marginRight: '1.2rem', 
            position: 'fixed', 
            zIndex: '99' 
        }}>
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
    )
}

export default  Filters;