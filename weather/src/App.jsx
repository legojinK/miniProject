import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/layout/Header.jsx';
import Contents from '@/layout/Contents.jsx';

function App() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const cities = ['Oslo', 'New York', 'Tokyo', 'Prague'];
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        if (city === '') {
            getCurrentLocation();
        } else {
            getWeatherByCity();
        }
    }, [city]);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            return getWeatherByCurrentLocation(lat, lon);
        });
    };

    const getWeatherByCurrentLocation = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e39e4f8d4566233ee9cc271d7c918afd&units=metric`;
        const { data } = await axios.get(url);
        setWeather(data);
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleCitySelect = (selectedCity) => {
        setCity(selectedCity);
        setDropdownOpen(false);
    };

    const getWeatherByCity = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e39e4f8d4566233ee9cc271d7c918afd&units=metric`;
        const { data } = await axios.get(url);
        setWeather(data);
    };
    const iconUrl = `src/assets/current.png`;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-blue-100 bg-opacity-80 p-10 rounded-2xl shadow-lg text-gray-800 w-full max-w-lg relative">
                <Header weather={weather} />
                <div
                    className="relative mt-6 flex justify-center"
                    onBlur={() => setDropdownOpen(false)}
                    onFocus={() => setDropdownOpen(true)}
                    tabIndex="0"
                >
                    <button className="bg-blue-100  mb-4  rounded-lg">
                        <img src={iconUrl} alt='current' className="w-12 h-12" />
                    </button>

                    <button
                        onClick={toggleDropdown}
                        className="px-4 py-2 mb-3 bg-blue-300 bg-opacity-30 text-white font-semibold rounded-lg w-3/4 text-center hover:bg-blue-400 focus:outline-none"
                    >
                        {city || 'Select a city'}
                    </button>

                    {dropdownOpen && (
                        <ul className="absolute top-full mt-1 bg-white rounded-lg border border-gray-300 text-black z-10 max-h-32 overflow-auto w-3/4 transform -translate-x-1/2 left-1/2">
                            {cities.map((city) => (
                                <li
                                    key={city}
                                    onClick={() => handleCitySelect(city)}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {city}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>


                <Contents weather={weather} />
            </div>
        </div>
    );
}

export default App;
