import Search from "./Search"
import API_KEY from "../ApiKeys";
import { useState } from "react"

export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchData(param) {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}/?key=${API_KEY} `)
            const data = await response.json();
            console.log(data, "data");

        } catch (e) {
            console.log(e);

        }
    }

    function handleSearch() {
        fetchData(search)
    }


    return (
        <div>
            <Search search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
        </div>
    )
}