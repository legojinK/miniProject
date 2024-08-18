import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/layout/Header.jsx';
import Contents from '@/layout/Contents.jsx';
import Loading from "@/component/Loading.jsx";
import ErrorModal from "@/component/ErrorModal.jsx";

function App() {

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const cities = ['Oslo', 'New York', 'Tokyo', 'Prague'];
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        try {
            setLoading(true);
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e39e4f8d4566233ee9cc271d7c918afd&units=metric`;
            const { data } = await axios.get(url);
            setWeather(data);
            setApiError(null);
            setLoading(false);
        } catch (err) {
            setApiError("요청하신 페이지를 찾을 수 없습니다");
            setIsModalOpen(true);
            setLoading(false);
        }
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setApiError(null);
    };

    const handleCitySelect = (selectedCity) => {
        setCity(selectedCity);
        setSelectedCity(selectedCity);
        setDropdownOpen(false);
    };

    const getWeatherByCity = async () => {
        try {
            setLoading(true);
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e39e4f8d4566233ee9cc271d7c918afd&units=metric`;
            const { data } = await axios.get(url);
            setWeather(data);
            setApiError(null);
            setLoading(false);
        } catch (err) {
            setApiError("요청하신 페이지를 찾을 수 없습니다");
            setIsModalOpen(true);
            setLoading(false);
        }
    };

    const currentWeather = () => {
        setCity('');
        setSelectedCity('current');
    };

    const iconUrl = `/assets/current.png`;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-blue-100 bg-opacity-80 p-10 rounded-2xl shadow-lg text-gray-800 w-full max-w-lg relative" style={{ minHeight: '550px' }}>
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loading loading={loading} />
                    </div>
                ) : weather ? (
                    <>
                        <Header weather={weather} />
                        <div className="mt-6 flex justify-center relative items-center">
                            <button
                                className={`bg-blue-100 rounded-lg absolute right-0 ${selectedCity === 'current' ? 'bg-blue-300 bg-opacity-30' : ''}`}
                                onClick={currentWeather}
                                style={{ height: '50px', width: '50px' }}>
                                <img src={iconUrl} alt='current' className="w-12 h-12" />
                            </button>

                            <div
                                className="relative flex justify-center w-3/4"
                                tabIndex="0"
                            >
                                <button
                                    onClick={toggleDropdown}
                                    className="px-4 py-2 bg-blue-300 bg-opacity-30 text-white font-semibold rounded-lg w-full text-center hover:bg-blue-400 focus:outline-none"
                                    style={{ height: '50px' }}
                                >
                                    {city || 'Select a City'}
                                </button>

                                {dropdownOpen && (
                                    <ul className="absolute top-full bg-white bg-opacity-50 rounded-lg border border-gray-300 text-black z-5 max-h-32 overflow-auto w-full">
                                        {cities.map((city) => (
                                            <li
                                                key={city}
                                                onClick={() => handleCitySelect(city)}
                                                className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
                                            >
                                                {city}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <Contents weather={weather} />
                    </>
                ) : null}
                {isModalOpen && <ErrorModal errorMessage={apiError} onClose={handleModalClose} />}
            </div>
        </div>
    );

}

export default App;
