import { peopleType } from "../Types/PeopleType";
import { Link } from "react-router";

export default function PeopleCard({ person }: { person: peopleType }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition duration-300">
      {person.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
          alt={person.name}
          className="w-full h-80 object-cover"
        />
      ) : (
        <div className="w-full h-80 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-sm italic">
          No Image Available
        </div>
      )}

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
                  {work.title || "Untitled"}
                </Link>
                {index < person.known_for.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
