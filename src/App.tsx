import { createBrowserRouter, RouterProvider } from "react-router";

import Register from "./Pages/Register/Register";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login/Login";
import Notfound from "./Pages/Notfound/Notfound";
import Home from "./Pages/Home/Home";
import { Provider } from "react-redux";
import { ourStore } from "./lib/store";
import GitTokenWhenRefresh from "./Components/GitTokenWhenRefresh/GitTokenWhenRefresh";
import UnAuthRoute from "./Components/UnAuthRoute/UnAuthRoute";
import AuthRoute from "./Components/AuthRoute/AuthRoute";
const router = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    {path:'',element: <AuthRoute><Home/></AuthRoute> },
    { path: 'register', element: <UnAuthRoute><Register /></UnAuthRoute>  },
    { path: 'login', element: <UnAuthRoute><Login /></UnAuthRoute> },
    {path: '*',element:<Notfound/>}
  ]
}])
export default function App() {
  return (
    <>
      <Provider store={ourStore}>
        <GitTokenWhenRefresh/>
        <RouterProvider router={router} />
        </Provider>
    </>
  )
}
