import randomString from "../../utils/randomString";
import { getAllDestinations } from "../../utils/ships-data.ts";

type AppProps = {
    region: string;
    handlePortsChange: any;
    departurePortsToFilter: any;
    handleDestinationChange: any;
    destinationsPortsFilter: any;
}

const ports: any = {
    'North America': [
        'Los Angeles, CA',
        'Miami, FL',
        'Seattle, WA',
        'New Orleans, LA',
        'New York, NY',
        'San Francisco, CA',
        'Orlando (Port Canaveral), FL',
        'Galveston, TX',
        'Boston, MA',
        'Québec City, Québec',
        'Tampa, FL',
        'Vancouver, British Columbia',
        'Whittier, AK',
        'Seward, AK',
        'Honolulu, HI',
        'Baltimore, MD',
        'Seattle, WA',
        'Norfolk, VA',
        'San Francisco, CA',
        'Los Angeles (Long Beach), CA',
        'Mobile, AL',
        'Charleston, SC'
    ],
    'South America': [
        'Buenos Aires, Argentina',
        'Rio de Janeiro, Brazil',
        'Santiago (San Antonio), Chile',
        'Ushuaia, Argentina',
    ],
    'Central America': [
        'Panama City, Panama',
        'Punta Cana (La Romana), Dominican Republic',
        'San Juan, Puerto Rico',
        'Jacksonville, FL',
        'Port Canaveral (Orlando), FL',
    ],
    'Africa': [
        'Cape Town, South Africa',
        'Port Louis, Mauritius',
    ],
    'Europe': [
        'London (Southampton), England',
        'Barcelona, Spain',
        'Rome (Civitavecchia), Italy',
        'Venice (Trieste), Italy',
        'Athens (Piraeus), Greece',
        'Copenhagen, Denmark',
        'Lisbon, Portugal',
        'Oslo, Norway',
        'Paris (Le Havre), France',
        'Provence (Marseille), France',
        'Stockholm, Sweden',
        'Bilbao, Spain',
        'Venice (Ravenna), Italy',
        'Reykjavik, Iceland',
        'Portsmouth, UK',
        'Tromsø, Norway',
        'London (Dover), England',
    ],
    'Oceania': [
        'Bali (Benoa), Indonesia',
        'Auckland, New Zealand',
        'Papeete, Tahiti, French Polynesia',
        'Sydney, Australia',
        'Brisbane, Australia',
    ],
    'Asia': [
        'Doha, Qatar',
        'Dubai, United Arab Emirates',
        'Istanbul, Turkey',
        'Tel-Aviv (Haifa), Israel',
        'Bangkok (Laem Chabang), Thailand',
        'Kuala Lumpur (Port Klang), Malaysia',
        'Manila, Philippines',
        'Seoul (Incheon), South Korea',
        'Singapore',
        'Taipei (Keelung), Taiwan',
        'Tokyo (Yokohama), Japan',
        'Tokyo, Japan',
    ]
}

const destinations = getAllDestinations();

function CheckBox({
    region, 
    handlePortsChange, 
    departurePortsToFilter,
    handleDestinationChange,
    destinationsPortsFilter
} : AppProps) {

    function returnToFiltersMenu() {
        const checkBoxSelector: any = document.querySelector('.check-box-page');

        // Close CheckBox
        checkBoxSelector.style.display = 'none';
    }

    const departureDiv = (
        <div>
            <h2>Departure</h2>
            <div className="check-box-list">
                {
                    region === ''
                    ? <div></div>
                    : ports[region].map((port: string) => {
                        return (
                            <div key={randomString(5)}>
                                <input 
                                    onChange={handlePortsChange} 
                                    checked={departurePortsToFilter.includes(port)} 
                                    type='checkbox' 
                                    name={port} 
                                    value={port} 
                                    id={port}
                                />
                                <label htmlFor={port}>{port}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

    const destinationDiv = (
        <div>
            <h2>Destination</h2>
            <div className="check-box-list">
                {
                    destinations.map((port) => {
                        return (
                            <div key={randomString(5)}>
                                <input 
                                    onChange={handleDestinationChange} 
                                    checked={destinationsPortsFilter.includes(port)} 
                                    type='checkbox' 
                                    name={port} 
                                    value={port} 
                                    id={port}
                                />
                                <label htmlFor={port}>{port}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

    return (
        <div className="check-box-page">
            <button style={{ backgroundColor: 'transparent', padding: '0.7rem 0.8rem', border: 'transparent' }} onClick={returnToFiltersMenu}>
                <div>
                    <i className="arrow left"></i>
                </div>
            </button>
            {
                region === ''
                ? destinationDiv
                : departureDiv
            }
        </div>
    )
}

export default CheckBox;