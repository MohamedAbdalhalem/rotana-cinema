import axios from "axios"
import { useState } from "react"
import { movieType } from "../Types/MovieType"
import { useQuery } from "@tanstack/react-query"

export default function useMovieTrending() {
    const [isDay,setIsDay] = useState<"day" | "week">('day')
  async function getMovieTrending() {
    return await axios.get<{ results: movieType[] | undefined }>(`https://api.themoviedb.org/3/trending/movie/${isDay}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
  }
  const {data,isLoading} = useQuery({
    queryKey: ['getMovieTrending',isDay],
    queryFn: getMovieTrending
  })
  const resluts = data?.data.results  
  return {setIsDay,resluts,isLoading,isDay}
}
