import { movieType } from '../Types/MovieType';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function useAllMovies() {
  const [page, setPage] = useState(1)
    function getAllMovies() {
        return axios.get<{ results: movieType[] | undefined }>(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE',
                accept: 'application/json'
            }
        })
    }
    function handlePageChange({ selected }: { selected: number }) {
        sessionStorage.setItem('page',String(selected +1))
        setPage(selected + 1)
    }
    useEffect(() => {
        if (sessionStorage.getItem('page')) {
            setPage(Number(sessionStorage.getItem('page')))
        } 
        return () => {
             sessionStorage.removeItem('page')
         }
    },[])
    const {data,isLoading}= useQuery({
        queryKey: ['getAllMovies', page],
        queryFn:getAllMovies
    })
    const results = data?.data.results
    return {page,handlePageChange,isLoading,results}
}
