import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Solutions from "./pages/Solutions.jsx";
import Technology from "./pages/Technology.jsx";
import Home from "./pages/Home.jsx";





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
