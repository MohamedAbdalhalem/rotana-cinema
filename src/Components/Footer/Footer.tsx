export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Rotana Cinema</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Stream movies and series in high quality with fresh content.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Movies</a></li>
            <li><a href="#" className="hover:underline">Series</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600 dark:text-gray-300 text-lg">
            <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-sky-400"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com" className="hover:text-black dark:hover:text-white"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500 dark:text-gray-400 px-6 pb-6">
        © {new Date().getFullYear()} Rotana Cinema™. All rights reserved.
      </div>
    </footer>
  );
}

 
