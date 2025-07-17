import { createBrowserRouter, RouterProvider } from "react-router";

import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { ourStore } from "./lib/store";
import GitTokenWhenRefresh from "./Components/GitTokenWhenRefresh";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Components/Layout";
import AuthRoute from "./Components/AuthRoute";
import UnAuthRoute from "./Components/UnAuthRoute";
import Register from "./Pages/Register";
const router = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    {path:'',element: <AuthRoute><Home/></AuthRoute> },
    { path: 'register', element: <UnAuthRoute><Register /></UnAuthRoute>  },
    { path: 'login', element: <UnAuthRoute><Login /></UnAuthRoute> },
    {path: '*',element:<Notfound/>}
  ]
}])
const queryClient = new QueryClient()
export default function App() {
  return (
    <>
      <Provider store={ourStore}>
        <QueryClientProvider client={queryClient}>
        <GitTokenWhenRefresh/>
          <RouterProvider router={router} />
          </QueryClientProvider>
        </Provider>
    </>
  )
}
