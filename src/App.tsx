import { createBrowserRouter, RouterProvider } from "react-router";

import Register from "./Pages/Register/Register";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login/Login";
import Notfound from "./Pages/Notfound/Notfound";
import Home from "./Pages/Home/Home";
import { Provider } from "react-redux";
import { ourStore } from "./lib/store";
const router = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    {path:'',element:<Home/>},
    { path: 'register', element: <Register /> },
    { path: 'login', element: <Login /> },
    {path: '*',element:<Notfound/>}
  ]
}])
export default function App() {
  return (
    <>
      <Provider store={ ourStore }>
        <RouterProvider router={router} />
        </Provider>
    </>
  )
}
