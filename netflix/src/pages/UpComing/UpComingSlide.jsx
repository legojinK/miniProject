import React from 'react';
import {Alert} from "react-bootstrap";
import {useUpComingQuery} from "../../hooks/useUpComing.jsx";
import MovieSlider from "../../common/MovieSlider/MovieSlider.jsx";
import {responsive} from "../../constants/responsive.jsx";


const UpComingSlide = () => {
    const {data,isLoading,isError,error}=useUpComingQuery()
    if(isLoading) {
        return  <h1>Loading</h1>
    }
    if(isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div>
            <MovieSlider title="Upcoming" movies={data.results} responsive={responsive}/>
        </div>
    );
};

export default UpComingSlide;