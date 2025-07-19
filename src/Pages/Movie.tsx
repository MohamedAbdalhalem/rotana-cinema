import { NavLink, Outlet, useParams } from 'react-router'

export default function Movie() {
  const { id } = useParams()
  return (
    <>
      <div className="flex justify-center items-center gap-6 py-4 border-b border-gray-800 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
        <NavLink
              to={`/movieDetials/${id}`}
              className="relative cursor-pointer px-3 py-1 text-sm font-semibold transition hover:text-[#1A71E3]"
            >
             Overview
            </NavLink>
        <NavLink
              to={`/movieDetials/${id}/cast&crew`}
              className="relative cursor-pointer px-3 py-1 text-sm font-semibold transition hover:text-[#1A71E3]"
            >
             Cast & Crew
            </NavLink>
        <NavLink
              to={`/movieDetials/${id}/trailers`}
              className="relative cursor-pointer px-3 py-1 text-sm font-semibold transition hover:text-[#1A71E3]"
            >
             Trailers
            </NavLink>
        <NavLink
              to={`/movieDetials/${id}/reviews`}
              className="relative cursor-pointer px-3 py-1 text-sm font-semibold transition hover:text-[#1A71E3]"
            >
             Reviews
            </NavLink>
        </div>
      <Outlet  />
</>
  )
}
