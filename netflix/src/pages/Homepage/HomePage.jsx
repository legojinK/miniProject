import React from 'react';
import Banner from "./components/Banner/Banner.jsx";
import PopularMovieSlide from "../PopularMovieSlide/PopularMovieSlide.jsx";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <PopularMovieSlide/>
        </div>
    );
};

export default HomePage;