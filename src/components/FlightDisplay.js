import React, {useState} from 'react';

const FlightDisplay = () => {
    const [depatureDate, setDepartureDate] = useState('');
    const [serachResult, setSearchResults] = useState(null);

    const handleSearch = async (e) => {
        let departureDate = new Date().toJSON().slice(0, 10);
        e.preventDefault();
        //handle  search based on criteria 
        console.log("search criteria: " , {depatureDate});
        //add api request logic

        const apiUrl = `/apiflights/${departureDate}/2`;

        try{
            const response = await fetch(apiUrl);
            const data = await response.json();

            setSearchResults(data);
        } catch(error){
            console.log("error fetching data: ", error);
        }
    };
















    return(
        <div>
            <h1>Flight Display</h1>




        </div>
    )

}
