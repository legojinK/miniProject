import React from 'react';
import {Badge} from "react-bootstrap";
import "./MovieCard.css";
import {useMovieGenreQuery} from "../../hooks/useMovieGenre.jsx";

const MovieCard = ({movie}) => {
    const { data:genreData}=useMovieGenreQuery()

    // const showGenre=(genreIdList)=>{
    //     if(!genreIdList) return [];
    //
    //     const genreNameList = genreIdList.map((id)=>{
    //         const genreObj = genreData.find((genre)=> genre.id===id)
    //         console.log(111,genreObj)
    //         return genreObj.name
    //     })
    //     return genreNameList;
    // }

    const showGenre = (genreIdList) => {
        if (!genreIdList || !genreData) return [];

        return genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return  genreObj.name
        });
    };

    return (
        <div style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`+
                ")",}}
        className="movie-card">
            <div className="overlay">
                <h1>{movie.title}</h1>
                {showGenre(movie.genre_ids).map((id,index)=>(<Badge key={index} bg="danger">{id}</Badge>))}
            <div>
                star:{movie.vote_average}
            </div>
            <div>
                popular:{movie.popularity}
            </div>
            <div>
                age:{movie.adult?'over18':'under18'}
            </div>
            </div>
        </div>
    );
};

export default MovieCard;