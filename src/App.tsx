import { createBrowserRouter, RouterProvider } from "react-router";

import Register from "./Pages/Register/Register";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login/Login";
import Notfound from "./Pages/Notfound/Notfound";
const router = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { path: 'register', element: <Register /> },
    { path: 'login', element: <Login /> },
    {path: '*',element:<Notfound/>}
  ]
}])
export default function App() {
  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}
