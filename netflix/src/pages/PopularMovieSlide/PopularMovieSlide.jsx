import React from 'react';
import {usePopularMoviesQuery} from "../../hooks/usePopularMovies.jsx";
import {Alert} from "react-bootstrap";
import {responsive} from "../../constants/responsive.jsx";
import MovieSlider from "../../common/MovieSlider/MovieSlider.jsx";

const PopularMovieSlide = () => {
    const {data,isLoading,isError,error}=usePopularMoviesQuery()
    if(isLoading) {
        return  <h1>Loading</h1>
    }
    if(isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div>
            <MovieSlider title="Top Popular Movies" movies={data.results} responsive={responsive}/>
        </div>
    );
};

export default PopularMovieSlide;