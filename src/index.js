import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Page404 } from "./pages/Page404"
import { Dashboard } from "./pages/Dashboard"
import { Yesterday } from "./pages/Yesterday"
import { Upcoming } from "./pages/Upcoming"
import { Profile } from "./pages/Profile"
import { Settings } from "./pages/Settings"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/yesterday", element: <Yesterday /> },
  { path: "/dashboard/upcoming", element: <Upcoming /> },
  { path: "/dashboard/profile", element: <Profile /> },
  { path: "/dashboard/settings", element: <Settings /> },
  { path: "*", element: <Page404 /> },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
