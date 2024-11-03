import "../style/navstyle.css"
import {styled} from "styled-components";
import logo from "../assets/logo.png"
import {useState,useEffect} from "react";

function Navbar()
{


    const [prevscrollbar,setprescrollbar]=useState(window.pageYOffset);
    const [top,settop]=useState(0);
    useEffect(()=>{
        //function to handle scroll
        const handlescroll=()=>{
            const curscrollpos=window.pageYOffset;
            if(prevscrollbar>curscrollpos)
            {
                settop(0);
            }
            else
            {
                settop(-150);
            }
            setprescrollbar(curscrollpos);
        };
        window.addEventListener('scroll',handlescroll);
        return ()=>{
            window.removeEventListener('scroll',handlescroll);
        };
    },[prevscrollbar]);


    const DIV=styled.div`
        border: rgba(0, 0, 0, 0.34) 2px solid;
        width: 80%;
        margin-left: 8%;
        margin-top: 20px;
        position: fixed;
        top: ${top}px;
        z-index: 100;
        border-radius: 70px;
        background-color: rgba(236,231,231,0.91);
    `;
    const NAV=styled.nav`
        display: flex;
        justify-content: center;
        align-items: center;
        `;
    const UL=styled.nav`
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        align-items: normal;
        gap: 4rem;
        height: 50%;
    `;
    const LI=styled.li`
        font-weight: 500;
        font-size: large;
        margin: 30px 10px 20px 10px;
        padding: 6px;
    `;
    const A=styled.a`
        text-decoration: none;
        color: black;
    `;
    const IMG=styled.img`
        margin-right: 300px;
    `;


    return (
        <>
            <DIV>
                <NAV>
                    <UL>
                        <IMG src={logo} height={"100px"} width={"150px"}></IMG>
                        <A href={"#"}><LI>Home</LI></A>
                        <A href={"#"}><LI>Service</LI></A>
                        <A href={"#"}><LI>Team</LI></A>
                    </UL>
                </NAV>
            </DIV>
        </>
    )
}



export default Navbar

























