import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom'
import "./main.css";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbarComponents/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "search/:intitle",
        element: <SearchPage/>,
      },
      {
        path: "profile/:userId",
        element: <ProfilePage/>,
      },
      {
        path: "",
        element: <HomePage/>,
      },
    ],
  },
]);
root.render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>,
)
