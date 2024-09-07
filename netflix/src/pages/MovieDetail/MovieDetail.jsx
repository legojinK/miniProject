import React, { useState } from 'react';
import { FaStar, FaHeart, FaPlay } from 'react-icons/fa';
import {useParams} from 'react-router-dom';
import { useMovieDetail, useMovieVideos } from "../../hooks/useMovieDetail.jsx";
import './MovieDetail.css';
import {Alert} from "react-bootstrap";
import RecommendSlide from "../RecommendSlide/RecommendSlide.jsx";
import Reviews from "../Reviews/Reviews.jsx";

const MovieDetail = () => {
    const { id } = useParams();
    const { data: movie, isLoading, isError, error } = useMovieDetail(id);
    const { data: videos, isLoading: isLoadingVideos } = useMovieVideos({ id });
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showFullOverview, setShowFullOverview] = useState(false);


    const handlePlayVideo = (videos) => {
        setIsVideoPlaying(true);
        console.log('key',videos)
        window.location.href = `https://www.youtube.com/embed/${videos}`;
    };

    const handleToggleOverview = () => {
        setShowFullOverview(!showFullOverview);
    };
    if(isLoading) {
        return  <h1>Loading</h1>
    }
    if(isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div className="movie-detail-page">
            <div className="movie-banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
                <div className="movie-banner-overlay">
                    <h1 className="movie-title">{movie.title}</h1>
                    <div className="movie-meta">
                        <span>{movie.release_date}</span>
                        <span>{movie.runtime} min</span>
                        <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
                    </div>
                    <div className="movie-overview">
                        {showFullOverview ? movie.overview : `${movie.overview.slice(0, 150)}...`}
                        <button onClick={handleToggleOverview} className="show-more-btn">
                            {showFullOverview ? '[접기]' : '[더보기]'}
                        </button>
                    </div>
                    <div className="action-buttons">
                        <button className="play-btn" onClick={()=>handlePlayVideo(videos)}>
                            <FaPlay className="icon" /> Play
                        </button>
                    </div>
                    <div className="movie-info">
                        <div className="movie-stats">
                            <div className="rating">
                                <FaStar className="icon star-icon" />
                                <span>{movie.vote_average} / 10</span>
                            </div>
                            <div className="popularity">
                                <FaHeart className="icon heart-icon" />
                                <span>{movie.popularity} Popularity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RecommendSlide id={movie.id}/>
            <Reviews id={movie.id}/>

        </div>
    );
};

export default MovieDetail;
