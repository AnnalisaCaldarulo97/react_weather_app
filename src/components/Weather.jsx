import Search from "./Search"
import API_KEY from "../ApiKeys";
import { useEffect, useState } from "react"

export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    function getCelsius(far) {
        return (far - 32) * 5 / 9
    }

    async function fetchData(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}/?key=${API_KEY} `)
            const data = await response.json();

            if (data) {
                setWeatherData(data)
                setLoading(false)
            }
            console.log(data, "data");

        } catch (e) {
            setLoading(false)
            console.log(e);

        }
    }
    function handleSearch() {
        fetchData(search)
    }

    function getCurrentDate() {
        let date = new Date()
        const options =
        {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',

        }
        date = date.toLocaleDateString('en-US', options)
        return date;
    }

    // useEffect(() => {
    // }, [])

    return (
        <div>
            <Search search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {
                loading
                    ?
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                    :
                    weatherData ?
                        <div className="city-name">
                            <h2>
                                {weatherData?.resolvedAddress}
                            </h2>
                            <div className="date">
                                <span> {getCurrentDate()} </span>
                            </div>
                            <div className="temperature">
                                {/* temperatura */}
                                {weatherData ? getCelsius(weatherData.currentConditions.dew) : ''}°
                            </div>
                            <p className="description">
                                {weatherData?.description}
                            </p>
                            <div className="weather-info">
                                <div>
                                    <div>
                                        <p className="wind"> {weatherData?.currentConditions.windspeed} </p>
                                        <p>Wind speed</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="humidity"> {weatherData?.currentConditions.humidity}% </p>
                                        <p>Humidity</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ''
            }
        </div>
    )
}