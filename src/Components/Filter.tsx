
import { useState } from 'react';
import useGenreMovies from '../Hooks/useGenreMovies';


export default function Filter() {
  const [open, setOpen] = useState(false);
  const genres = useGenreMovies()
  return (
    <div className='mb-4'>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Filter
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center filter">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-5">
            <h2 className="text-lg font-semibold mb-4">Choose a Genre</h2>

            <select
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            >
              {genres?.map(genre => <option key={genre.id} value={genre.id}>{ genre.name }</option>)}
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
