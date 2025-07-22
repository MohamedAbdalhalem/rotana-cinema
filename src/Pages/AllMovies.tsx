import MovieCard from '../Components/MovieCard';
import MainLoudingScreen from '../Components/MainLoudingScreen';
import Pagination from '../Components/Pagination';
import Filter from '../Components/Filter';
import useAllMovies from '../Hooks/useAllMovies';
export default function AllMovies() {
    const {results,handlePageChange,isLoading,page} = useAllMovies()
    if (isLoading) {
        return <MainLoudingScreen/>
    }
    return (
        
    <div className="px-5 pb-5 pt-20">
          <div className='flex justify-between items-center'>
          <h1 className="text-gray-800 dark:text-white mb-4 font-bold text-4xl ">All Movies</h1>
          <Filter/>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {results?.map(movie => <MovieCard key={movie.id} movieData={movie}/>)}
          </div>
           <Pagination numOfPages={500} page={page}  pageChangeFunction={handlePageChange}/>
    </div>
  )
}
