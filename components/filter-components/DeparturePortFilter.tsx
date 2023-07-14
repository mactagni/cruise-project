import randomString from '../../utils/randomString.ts';

type AppProps = {
    handleRegionClick: any;
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

// const departurePorts = [
//     'London (Southampton), England',
//     'Los Angeles, CA',
//     'Miami, FL',
//     'Seattle, WA',
//     'Barcelona, Spain',
//     'New Orleans, LA',
//     'New York, NY',
//     'Rome (Civitavecchia), Italy',
//     'Venice (Trieste), Italy',
//     'Athens (Piraeus), Greece',
//     'Cape Town, South Africa',
//     'Copenhagen, Denmark',
//     'Doha, Qatar',
//     'Dubai, United Arab Emirates',
//     'Istanbul, Turkey',
//     'Lisbon, Portugal',
//     'Oslo, Norway',
//     'Paris (Le Havre), France',
//     'Port Louis, Mauritius',
//     'Stockholm, Sweden',
//     'Tel-Aviv (Haifa), Israel',
//     'San Francisco, CA',
//     'Orlando (Port Canaveral), FL',
//     'Provence (Marseille), France',
//     'Galveston, TX',
//     'Bilbao, Spain',
//     'Boston, MA',
//     'Panama City, Panama',
//     'Québec City, Québec',
//     'Venice (Ravenna), Italy',
//     'Tampa, FL',
//     'Vancouver, British Columbia',
//     'Whittier, AK',
//     'Bali (Benoa), Indonesia',
//     'Bangkok (Laem Chabang), Thailand',
//     'Kuala Lumpur (Port Klang), Malaysia',
//     'Manila, Philippines',
//     'Seoul (Incheon), South Korea',
//     'Seward, AK',
//     'Singapore',
//     'Taipei (Keelung), Taiwan',
//     'Tokyo (Yokohama), Japan',
//     'Tokyo, Japan',
//     'Honolulu, HI',
//     'Reykjavik, Iceland',
//     'Baltimore, MD',
//     'Auckland, New Zealand',
//     'Papeete, Tahiti, French Polynesia',
//     'Punta Cana (La Romana), Dominican Republic',
//     'Sydney, Australia',
//     'Buenos Aires, Argentina',
//     'Portsmouth, UK',
//     'Rio de Janeiro, Brazil',
//     'Santiago (San Antonio), Chile',
//     'Tromsø, Norway',
//     'Ushuaia, Argentina',
//     'San Juan, Puerto Rico',
//     'Jacksonville, FL',
//     'Port Canaveral (Orlando), FL',
//     'London (Dover), England',
//     'Brisbane, Australia',
//     'Seattle, WA',
//     'Norfolk, VA',
//     'San Francisco, CA',
//     'Los Angeles (Long Beach), CA',
//     'Singapore',
//     'Mobile, AL',
//     'Charleston, SC'
// ]

function DeparturePortFilter({ handleRegionClick }: AppProps) {

    return (
        <div className='filter-container filter-components'>
            <p style={{ textAlign: 'center' }}>Departure Port</p>
            <div>
                {
                    Object.keys(ports).map((port: string) => {
                        return(
                            <button 
                                value={port} 
                                onClick={handleRegionClick} 
                                className='port-region' 
                                key={randomString(5)}
                            >{port}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DeparturePortFilter; 