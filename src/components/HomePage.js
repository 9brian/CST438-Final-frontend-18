import React, { useState } from 'react';

const HomePage = () => {
    const [departureCode, setDepartureCode] = useState('');
    const [arrivalCode, setArrivalCode] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [numAdults, setNumAdults] = useState('1');
    const [searchResult, setSearchResults] = useState(null);

    const token = sessionStorage.getItem("jwt");

    const handleSearch = (e) => {
        e.preventDefault();
        //handle  search based on criteria 
        console.log("search criteria: ", { departureCode, arrivalCode, departureDate, numAdults });

        const apiUrl = `/apiflights/${departureCode}/${arrivalCode}/${departureDate}/${numAdults}/2`;

        fetch(apiUrl, {
            headers: {'Authorization' : token}
        })
        .then(response => response.json())
        .then(data => {
            setSearchResults(data);
        })
        .catch(err => console.log("error fetching data: ", err));
        }


    return (
        <div>
            <h1> ✈️ Flight Search </h1>
            <form onSubmit={handleSearch}>
                <label htmlFor='departureCode'>Departure Airport Code:    </label>
                <input
                    type='text'
                    id='departureCode'
                    placeholder='LAX'
                    value={departureCode}
                    onChange={(e) => setDepartureCode(e.target.value)}
                    required 
                />
                <br></br>
                <label htmlFor='arrivalCode'>Arrival Airport Code:    </label>
                <input
                    type='text'
                    id='arrivalCode'
                    name='arrivalCode'
                    placeholder='JFK'
                    value={arrivalCode}
                    onChange={(e) => setArrivalCode(e.target.value)}
                    required
                />
                <br></br>
                <label htmlFor='departureDate'> Departure Date:    </label>
                <input
                    type='date'
                    id='departureDate'
                    name='departureDate'
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                />
                <br></br>
                <label htmlFor="numAdults">Number of Adults:   </label>
                <select
                    id="numAdults"
                    name="numAdults"
                    value={numAdults}
                    onChange={(e) => setNumAdults(e.target.value)}
                    required
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    {/* Add more options as needed */}
                </select>
                <br></br>
                <br></br>
                <button type="submit">Search Flights</button>
            </form>

            {searchResult && (
                <div>
                    <h2>Search Results</h2>
                    {/* Display search results as needed */}
                    {/* You can map through the results and render them */}
                    {searchResult.map((result) => (
                        <div key={result.id}>
                            {/* Render flight details */}
                            <p>Flight ID: {result.id}</p>
                            <p>Carrier: {result.carrier_name}</p>
                            {/* Add more details as needed */}
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
};

export default HomePage;