import {styled} from "styled-components";
import "./navstyle.css"
import { useState } from "react";


const BUTTON=styled.button`
    position: relative;
    bottom: 40px;
    left: 1400px;
`;
const A2=styled.a`
   text-decoration: none;
`;

const A=styled.a`
    font-size: 25px;
    color: white;
    text-decoration: none;
    padding: 15px;
    margin: 5px;
    display: block;
    text-align: center;
`;

const P9=styled.p`
    color: white;
    margin: 0;
    display: inline;
    position: relative;
    top: 10px;
    left: 15px;
    font-size: 50px;
`;

const UL=styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    left: 0;
    max-width: 100%;
    overflow: hidden;
    background-color: rgb(0, 0, 0);
    height: 80px;
`;

const LI=styled.li`
    float: right;
    position: relative;
    top: 5px;
    right: 200px;
`;


function Navbar()
{
    return(
            <div>
                <UL>
                   <A2 href={""}> <P9>EVECTRA</P9></A2>
                    <LI><A className={"a"}  href={"/"}>Contact</A></LI>
                    <LI><A className={"a"} href={"/"}>About</A></LI>
                    <LI><A className={"a"} href={"/"}>Technology</A></LI>
                    <LI><A className={"a"} href={"/"}>Solutions</A></LI>
                    <BUTTON className={"button-31"}>LOG IN</BUTTON>
                </UL>
            </div>
    )
}

export default Navbar;







































