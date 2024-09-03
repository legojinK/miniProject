import React from 'react';
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard.jsx";
import 'react-multi-carousel/lib/styles.css';
import "./MovieSlider.style.css";

const MovieSlider = ({title,movies,responsive}) => {
    return (
        <div>
            <h3>{title}</h3>
            <Carousel
                centerMode="center"
                responsive={responsive}
                infinite={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
            >
                {movies.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
            </Carousel>
        </div>
    );
};

export default MovieSlider;