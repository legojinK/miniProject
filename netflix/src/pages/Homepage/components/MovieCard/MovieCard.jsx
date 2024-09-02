import React from 'react';
import {Badge} from "react-bootstrap";
import "./MovieCard.css";

const MovieCard = ({movie}) => {
    return (
        <div style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`+
                ")",}}
        className="movie-card">
            <div className="overlay">
                <h1>{movie.title}</h1>
                {movie.genre_ids.map((id,index)=>(<Badge key={index} bg="danger">{id}</Badge>))}
            <div>
                {movie.vote_average}
            </div>
            <div>
                {movie.popularity}
            </div>
            <div>
                {movie.adult?'over18':'under18'}
            </div>
            </div>
        </div>
    );
};

export default MovieCard;