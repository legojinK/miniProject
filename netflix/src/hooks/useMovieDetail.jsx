import {useQuery} from "@tanstack/react-query";
import api from "../utils/api.jsx"

const fetchMovieDetail=async (id)=>{
    return await api.get(`/movie/${id}`)
}
export const useMovieDetail= (id)=>{
    return useQuery({
        queryKey: ['movie-detail',id],
        queryFn: () => fetchMovieDetail(id),
        select:(result)=>result.data
    })
}

const fetchMovieVideos = async ({ id }) => {
    try {
        const response = await api.get(`/movie/${id}/videos`);
        return response.data.results[0].key;
    } catch (error) {
        console.error("Error fetching videos:", error);
        return [];
    }
};

export const useMovieVideos = ({ id }) => {
    return useQuery({
        queryKey: ['movie-videos', { id }],
        queryFn: () => fetchMovieVideos({ id }),
    });
};