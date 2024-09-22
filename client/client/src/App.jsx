import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import {StrictMode} from "react";
import {styled} from "styled-components";
import Home1 from "./components/Home1.jsx";
function App()
{

    const HR=styled.hr`
        margin: 0;
        
    `;


  return (
    <StrictMode>
        <Navbar></Navbar>
        <HR></HR>
        <Home1></Home1>
    </StrictMode>
  )
}

export default App
