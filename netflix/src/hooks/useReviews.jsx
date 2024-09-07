import {useQuery} from "@tanstack/react-query";
import api from "../utils/api.jsx"

const fetchReviews=async(id)=>{
    return await api.get(`movie/${id}/reviews`)
}
export const useReviewsQuery=(id)=>{
    return useQuery({
        queryKey: ['reviews',id],
        queryFn:()=>fetchReviews(id),
        select:(result)=>result.data
    })
}