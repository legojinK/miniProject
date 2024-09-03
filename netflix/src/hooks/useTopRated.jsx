import {useQuery} from "@tanstack/react-query";
import api from "../utils/api.jsx"

const fetchTopRated=()=>{
    return api.get(`/movie/top_rated`)
}
export const useTopRatedQuery=()=>{
    return useQuery({
        queryKey: ['top-rated'],
        queryFn:fetchTopRated,
        select:(result)=>result.data
    })
}