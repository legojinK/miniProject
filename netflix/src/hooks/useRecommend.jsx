import {useQuery} from "@tanstack/react-query";
import api from "../utils/api.jsx"

const fetchRecommend=async(id)=>{
    return await api.get(`movie/${id}/recommendations`)
}
export const useRecommendQuery=(id)=>{
    return useQuery({
        queryKey: ['recommendations',id],
        queryFn:()=>fetchRecommend(id),
        select:(result)=>result.data
    })
}