import React, { useState } from 'react';

const HomePage = () => {
    const [departureCode, setDepartureCode] = useState('');
    const [arrivalCode, setArrivalCode] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [numAdults, setNumAdults] = useState('1');
    const [searchResult, setSearchResults] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        //handle  search based on criteria 
        console.log("search criteria: ", { departureCode, arrivalCode, departureDate, numAdults });
        //add api request logic

        const apiUrl = `/apiflights/${departureCode}/${arrivalCode}/${departureDate}/${numAdults}/2`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            setSearchResults(data);
        } catch (error) {
            console.log("error fetching data: ", error);
        }
    };

    return (
        <div>
            <h1>Flight search</h1>
            <form onSubmit={handleSearch}>
                <label htmlFor='departureCode'>Departure Airport Code:</label>
                <input
                    type='text'
                    id='departureCode'
                    placeholder='LAX'
                    value={departureCode}
                    onChange={(e) => setDepartureCode(e.target.value)}>Required</input>


                <label htmlFor='arrivalCode'>Arrival Airport Code: </label>
                <input
                    type='text'
                    id='arrivalCode'
                    name='arrivalCode'
                    placeholder='JFK'
                    value={arrivalCode}
                    onChange={(e) => setArrivalCode(e.target.value)}>Required</input>

                <label htmlFor='departureDate'> Departure Date: </label>
                <input
                    type='date'
                    id='departureDate'
                    name='departureDate'
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}>Required</input>

                <label htmlFor="numAdults">Number of Adults:</label>
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

                <button type="submit">Search Flights</button>
            </form>

            {searchResult && (
                <div>
                    <h2>Search Results</h2>
                    {/* Display search results as needed */}
                    {/* You can map through the results and render them */}
                    {searchResults.map((result) => (
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
}