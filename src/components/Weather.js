import React, {useState} from 'react'

const api = {
    key: 'c3684657ec272675fe8dce189015b9f4',
    url: 'https://api.openweathermap.org/data/2.5/'
}

function Weather() {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const dateBuilder = (d) => {
        setTimeout(() => {
            
        }, 1000)
        return `${d.toLocaleTimeString()}, ${d.toDateString()}`
    }

    const search = (evt) => {
        if(evt.key === 'Enter') {
            fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)
                setQuery('')
                console.log(result)
            })
        }
    }

    
    


    return (
        <div className="main">
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={e => setQuery(e.target.value)}
                    onKeyPress={search}
                    value={query}
                />
            </div>
            {(typeof weather.main != 'undefined') ? (
                <div>
                     <div className="weather-section">
                        <div className="location-box">
                            <div className="location">
                                {weather.name}, {weather.sys.country}
                            </div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-info">
                            <div className={`weather-img ${weather.weather[0].main.toLowerCase()}`}>
                                
                            </div>
                            <div className="weather-temp">{Math.round(weather.main.temp)}˚C</div>
                            <div className="weather-sign">{weather.weather[0].main}</div>
                        </div>
                    </div>
                </div>
            ) : ('')}
            
        </div>
    )
}

export default Weather
