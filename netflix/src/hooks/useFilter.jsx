import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchFilter = async ({ genreKeyword, sortKeyword, page }) => {
    let url = `/discover/movie?page=${page}`;

    if (sortKeyword) {
        url += `&sort_by=${sortKeyword}`;
    }
    if (genreKeyword) {
        url += `&with_genres=${genreKeyword}`;
    }

    return await api.get(url);
};

export const useFilterQuery = ({ genreKeyword, sortKeyword, page }) => {
    return useQuery({
        queryKey: ["movie-filter", genreKeyword, sortKeyword, page],
        queryFn: () => fetchFilter({ genreKeyword, sortKeyword, page }),
        select: (result) => result.data,
        enabled: !!(genreKeyword || sortKeyword),
    });
};
