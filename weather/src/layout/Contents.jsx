import React from 'react';



const Contents = ({ weather }) => {

    const icon = weather?.weather?.[0]?.icon;
    const iconUrl = (`/assets/day/${icon}.png`);

    return (
        <div className="text-center">
            <img src={iconUrl} alt={weather?.weather[0].description} className="mx-auto mt-3 w-64 h-64" />
            <div className="text-4xl font-bold mt-4">{Math.round(weather?.main.temp)}°C</div>
            <div className="text-xl mt-1">{weather?.weather[0].description}</div>
        </div>
    );
};

export default Contents;
