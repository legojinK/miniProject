import React from 'react';
import {useTopRatedQuery} from "../../hooks/useTopRated.jsx";
import {Alert} from "react-bootstrap";
import MovieSlider from "../../common/MovieSlider/MovieSlider.jsx";
import {responsive} from "../../constants/responsive.jsx";

const TopRatedSlide = () => {

    const {data,isLoading,isError,error}=useTopRatedQuery()
    if(isLoading) {
        return  <h1>Loading</h1>
    }
    if(isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div>
            <MovieSlider title="Top Rated" movies={data.results} responsive={responsive}/>
        </div>
    );
};

export default TopRatedSlide;