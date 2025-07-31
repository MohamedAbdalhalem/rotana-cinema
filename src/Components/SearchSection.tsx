import { Button } from "flowbite-react";

export default function SearchSection() {
  return (
    <section
          className="md:h-[50vh] h-[70vh] bg-cover bg-center flex-col flex justify-center px-5"
        >
            <h2 className="text-5xl font-extrabold text-white mb-3">Welcome</h2>
            <h3 className="text-3xl font-bold text-white mb-8">Millions of movies, TV shows and people to discover. Explore now.</h3>
             <div
            className="flex flex-col sm:flex-row w-full  bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search for a movie, tv show, person......"
              className="w-full px-6 py-4 text-gray-800 focus:outline-none"
            />
            <Button
              type="submit"
              className="sm:rounded-none sm:rounded-r-2xl rounded-b-2xl bg-gradient-to-r from-blue-600 py-8 font-bold cursor-pointer to-blue-800 sm:mt-0 mt-2 sm:ml-0"
            >
              Search
            </Button>
          </div>
        </section>
  )
}
