
import ReactPaginate from 'react-paginate';

import MovieCard from '../Components/MovieCard';
import MainLoudingScreen from '../Components/MainLoudingScreen';
import usePopularMovies from '../Hooks/usePopularMovies';
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
           <ReactPaginate
      pageCount={500}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      containerClassName="flex justify-center items-center gap-2 mt-4 "
      pageClassName="border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      activeClassName="bg-blue-600 text-white font-bold"
      previousLabel={<i className='fa-solid fa-chevron-left'></i>}
      nextLabel={<i className='fa-solid fa-chevron-right'></i>}
      previousClassName="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
      nextClassName="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
      breakLabel='...'
      breakClassName="text-gray-400 px-2"
              disabledClassName="opacity-50 cursor-not-allowed"
                forcePage={page -1}
                onPageChange={handlePageChange}
    />
    </div>
  )
}
