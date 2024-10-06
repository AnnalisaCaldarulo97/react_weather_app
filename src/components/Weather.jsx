import Search from "./Search"
import API_KEY from "../ApiKeys";
import { useState } from "react"

export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchData() {
        try {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}appid=${API_KEY}`)
        } catch (e) {
            console.log(e);

        }
    }

    async function handleSearch() {
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