import React from 'react';
import {Alert} from "react-bootstrap";
import MovieSlider from "../../common/MovieSlider/MovieSlider.jsx";
import {responsive} from "../../constants/responsive.jsx";
import {useRecommendQuery} from "../../hooks/useRecommend.jsx";

const RecommendSlide = ({id}) => {

    const {data,isLoading,isError,error}=useRecommendQuery(id)
    if(isLoading) {
        return  <h1>Loading</h1>
    }
    if(isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div>
            <MovieSlider title="추천 영화" movies={data.results} responsive={responsive}/>
        </div>
    );
};

export default RecommendSlide;