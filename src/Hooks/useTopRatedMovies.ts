import { movieType } from '../Types/MovieType';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useTopRatedMovies() {
    const [page, setPage] = useState(1)
    function getTopRatedMovies() {
        return axios.get<{ results: movieType[] | undefined }>(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE',
                accept: 'application/json'
            }
        })
    }
    function handlePageChange({ selected }: { selected: number }) {
        sessionStorage.setItem('topRatedMoviesPage',String(selected +1))
        setPage(selected + 1)
    }
    useEffect(() => {
        const storedPage = sessionStorage.getItem('topRatedMoviesPage');
        if (storedPage) {
            setPage(+storedPage);
        }

        return () => {
            if (!location.pathname.startsWith('/TopRatedMovies') && !location.pathname.startsWith('/movieDetials')) {
                sessionStorage.removeItem('topRatedMoviesPage');
            }
        }
    }, [location.pathname]);
    const {data,isLoading}= useQuery({
        queryKey: ['getTopRatedMovies', page],
        queryFn:getTopRatedMovies
    })
    const results = data?.data.results
    return {page,handlePageChange,isLoading,results}
}
