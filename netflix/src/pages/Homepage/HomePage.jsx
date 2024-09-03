import React from 'react';
import Banner from "./components/Banner/Banner.jsx";
import PopularMovieSlide from "../PopularMovieSlide/PopularMovieSlide.jsx";
import TopRatedSlide from "../TopRatedSlide/TopRatedSlide.jsx";
import UpComingSlide from "../UpComing/UpComingSlide.jsx";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <PopularMovieSlide/>
            <TopRatedSlide/>
            <UpComingSlide/>
        </div>
    );
};

export default HomePage;