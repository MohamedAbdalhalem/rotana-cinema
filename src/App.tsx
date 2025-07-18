import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { ourStore } from "./lib/store";
import GitTokenWhenRefresh from "./Components/GitTokenWhenRefresh";
import { motion, AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Components/Layout";
import AuthRoute from "./Components/AuthRoute";
import UnAuthRoute from "./Components/UnAuthRoute";
import Register from "./Pages/Register";
import { useEffect, useState } from "react";
import MovieDetials from "./Pages/MovieDetials";
const router = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { path: '', element: <AuthRoute><Home /></AuthRoute> },
    {path:'movieDetials/:id',element:<AuthRoute><MovieDetials /></AuthRoute>},
    { path: 'register', element: <UnAuthRoute><Register /></UnAuthRoute>  },
    { path: 'login', element: <UnAuthRoute><Login /></UnAuthRoute> },
    {path: '*',element:<Notfound/>}
  ]
}])

const queryClient = new QueryClient()
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      
      setLoading(false);
      document.body.classList.remove('overflow-hidden')
    }, 2000); 
    
    return () => clearTimeout(timer);
  }, []);
return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed bg-gray-200 inset-0 dark:bg-black flex items-center justify-center dark:text-white text-3xl z-50"
          >
         <span className="loader">Loading</span>
          </motion.div>
        )}
      </AnimatePresence>
        <Provider store={ourStore}>
          <QueryClientProvider client={queryClient}>
            <GitTokenWhenRefresh />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </Provider>
      
    </>
  )
}
