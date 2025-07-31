import { Link } from 'react-router';
import { tvType } from '../Types/TvTypes';
import notFundImg from '../assets/No_Image_Available.jpg'
export default function TvShowCard({ tvShowData }: { tvShowData: tvType }) {
    const getRatingColor = (rating : number) => {
    if (rating >= 7) return "text-green-500";
    if (rating >= 4) return "text-yellow-500";
    return "text-red-500";
  };
  return (
    <Link to={`/tvShows/${tvShowData.id}/overview`}  className=" w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border dark:border-gray-700">
      <div className="h-48 w-full bg-gray-200 dark:bg-gray-700">
        <img
            src={tvShowData.backdrop_path ? `https://image.tmdb.org/t/p/w500${tvShowData.backdrop_path}` : notFundImg}
            alt={tvShowData.name}
            className="w-full h-full object-fill"
          />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
          {tvShowData.name}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
           <span className={`font-semibold flex items-center gap-1 ${getRatingColor(tvShowData.vote_average)}`}>
            ⭐ {tvShowData.vote_average.toFixed(1)}
          </span>
          <span>{tvShowData.first_air_date}</span>
        </div>
      </div>
    </Link>
  )
}
