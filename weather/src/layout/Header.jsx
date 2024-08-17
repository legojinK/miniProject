import React from 'react';

const Header = ({ weather }) => {
    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString(undefined, dateOptions);

    return (
        <div className="text-center mb-6">
            <div className="text-lg text-gray-600">{date}</div>
            <div className="text-3xl font-bold text-gray-800">{weather?.name}, {weather?.sys?.country}</div>
        </div>
    );
};

export default Header;
