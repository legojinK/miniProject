import {useQuery} from "@tanstack/react-query";
import api from "../utils/api.jsx"


const fetchUpComing=()=>{
    return api.get(`/movie/upcoming`)
}
export const useUpComingQuery = () => {
    return useQuery({
        queryKey:['up-coming'],
        queryFn:fetchUpComing,
        select:(result)=>result.data,
    })
}