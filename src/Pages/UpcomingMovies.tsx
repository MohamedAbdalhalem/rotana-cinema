import MovieCard from '../Components/MovieCard';
import MainLoudingScreen from '../Components/MainLoudingScreen';
import Pagination from '../Components/Pagination';

import useUpcomingMovies from '../Hooks/useUpcomingMovies';
export default function UpcomingMovies() {
    const {resluts,handlePageChange,isLoading,page,dates,numOfPages} = useUpcomingMovies()
    if (isLoading) {
        return <MainLoudingScreen/>
    }
    return (
        
    <div className="px-5 pb-5 pt-20">
            <h1 className="text-gray-800 dark:text-white mb-4 font-bold text-4xl ">Upcoming Movies <span className='text-gray-600 dark:text-gray-300 text-3xl'>{ `(${dates?.minimum} - ${dates?.maximum})` }</span></h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {resluts?.map(movie => <MovieCard key={movie.id} movieData={movie}/>)}
          </div>
           <Pagination numOfPages={numOfPages!} page={page}  pageChangeFunction={handlePageChange}/>
    </div>
  )
}

