import { movieType } from '../Types/MovieType';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { datesType } from '../Types/DatesType';
export default function useNowPlayingMovies() {
    const [page, setPage] = useState(1)
    function getNowPlayingMovies() {
        return axios.get<{ results: movieType[] | undefined,total_pages : number, dates : datesType }>(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE',
                accept: 'application/json'
            }
        })
    }
    function handlePageChange({ selected }: { selected: number }) {
        sessionStorage.setItem('nowPlayingMoviesPage',String(selected +1))
        setPage(selected + 1)
    }
    useEffect(() => {
        const storedPage = sessionStorage.getItem('nowPlayingMoviesPage');
        if (storedPage) {
            setPage(+storedPage);
        }

        return () => {
            if (!location.pathname.startsWith('/NowPlayingMovies') && !location.pathname.startsWith('/movieDetials')) {
                sessionStorage.removeItem('nowPlayingMoviesPage');
            }
        }
    }, [location.pathname]);
    const {data,isLoading}= useQuery({
        queryKey: ['getNowPlayingMovies', page],
        queryFn:getNowPlayingMovies
    })
    const results = data?.data.results
    const numOfPages = data?.data.total_pages
    const dates = data?.data.dates
    return {page,handlePageChange,isLoading,results,numOfPages,dates}
}

