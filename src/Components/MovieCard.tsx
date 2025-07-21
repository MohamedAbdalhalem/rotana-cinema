
import { Link } from 'react-router';
import { movieType } from '../Types/MovieType'

export default function MovieCard({ movieData }: { movieData: movieType }) {
    const getRatingColor = (rating : number) => {
    if (rating >= 7) return "text-green-500";
    if (rating >= 4) return "text-yellow-500";
    return "text-red-500";
  };
  return (
    <Link to={`/movieDetials/${movieData.id}/overview`} className="cursor-pointer bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition hover:scale-105 hover:shadow-xl duration-300">
      <div className="h-48 w-full bg-gray-200 dark:bg-gray-700">
        {movieData.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
            alt={movieData.title}
            className="w-full h-full object-fill"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
            No Image Available
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
          {movieData.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
           <span className={`font-semibold flex items-center gap-1 ${getRatingColor(movieData.vote_average)}`}>
            ⭐ {movieData.vote_average.toFixed(1)}
          </span>
          <span>{movieData.release_date}</span>
        </div>
      </div>
    </Link>
  )
}
