import MovieCard from '../Components/MovieCard';
import MainLoudingScreen from '../Components/MainLoudingScreen';
import usePopularMovies from '../Hooks/usePopularMovies';
import Pagination from '../Components/Pagination';
export default function PopularMovies() {
    const {results,handlePageChange,isLoading,page} = usePopularMovies()
    if (isLoading) {
        return <MainLoudingScreen/>
    }
    return (
        
    <div className="px-5 pb-5 pt-20">
          <h1 className="text-gray-800 dark:text-white mb-4 font-bold text-4xl ">Popular Movies</h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {results?.map(movie => <MovieCard key={movie.id} movieData={movie}/>)}
          </div>
           <Pagination numOfPages={500} page={page}  pageChangeFunction={handlePageChange}/>
    </div>
  )
}
