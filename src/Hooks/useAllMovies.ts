import { useQuery } from '@tanstack/react-query';
import { movieType } from '../Types/MovieType';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAllMovies() {
    const [page, setPage] = useState(1)
    const [genre, setGenreState] = useState('')
    const [voteAverage,setVoteAverage] = useState('')
    function setGenre(newGenre: string,newVoteAverage :string) {
        sessionStorage.setItem('allMoviesGenre', newGenre);
        sessionStorage.setItem('allMoviesVoteAverage', newVoteAverage);
        setGenreState(newGenre);
        setVoteAverage(newVoteAverage)
    }
    function getAllMovies() {
        return axios.get<{ results: movieType[] | undefined, total_pages: number }>(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&vote_average.gte=${voteAverage}&with_genres=${genre}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE',
                accept: 'application/json'
            }
        })
    }
    function handlePageChange({ selected }: { selected: number }) {
        sessionStorage.setItem('allMoviesPage', String(selected + 1))
        setPage(selected + 1)
    }
    useEffect(() => {
        const storedPage = sessionStorage.getItem('allMoviesPage');
        const storedGenre = sessionStorage.getItem('allMoviesGenre');
        const storedVoteAverage = sessionStorage.getItem('allMoviesVoteAverage');
        if (storedPage) {
            setPage(+storedPage);
        }
        if (storedGenre) {
            setGenreState(storedGenre);
        } 
        if (storedVoteAverage) {
            setVoteAverage(storedVoteAverage)
        }
        return () => {
            if (!location.pathname.startsWith('/AllMovies') && !location.pathname.startsWith('/movieDetials')) {
                sessionStorage.removeItem('allMoviesPage');
                sessionStorage.removeItem('allMoviesGenre');
                sessionStorage.removeItem('allMoviesVoteAverage');
            }
        }
    }, [location.pathname]);
    const { data, isLoading } = useQuery({
        queryKey: ['getAllMovies', page, genre,voteAverage],
        queryFn: getAllMovies
    })
    const results = data?.data.results
    const numOfPages = data?.data.total_pages! < 500 ? data?.data.total_pages : 500
    return { page, handlePageChange, isLoading, results, numOfPages, setGenre, genre }
}
