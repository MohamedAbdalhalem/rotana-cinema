import { peopleType } from "../Types/PeopleType";
import { Link } from "react-router";
import notFoundImg from '../assets/No_Image_Available.jpg'
export default function PeopleCard({ person }: { person: peopleType }) {
  return (
    <Link to={`/People/${person.id}`} className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border dark:border-gray-700">
      <img
          src={person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : notFoundImg}
          alt={person.name}
          className="w-full h-80 object-cover"
        />

      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {person.name}
        </h2>

        {person.known_for.length > 0 && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-gray-700 dark:text-gray-400">Known for:</span>{" "}
            {person.known_for.map((work, index) => (
              <span key={work.id}>
                <Link
                  to={`/movieDetials/${work.id}/overview`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {work.title || work.name}
                </Link>
                {index < person.known_for.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}
      </div>
    </Link>
  );
}
