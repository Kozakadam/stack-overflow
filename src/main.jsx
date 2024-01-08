import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([{
  path: "/",
  children: [
    {
      path: "",
      element: (
        <HomePage/>
      )
    },
    {
      path: "search",
      element: (
        <SearchPage/>
      )
    },
    {
      path: "profile",
      element: (
        <ProfilePage/>
      )
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
