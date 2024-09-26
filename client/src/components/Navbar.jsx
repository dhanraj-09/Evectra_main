import "./navstyle.css"
import {styled} from "styled-components";
import contactus from "./Contactus.jsx";
function Navbar()
{
    const DIV=styled.div`
        
    `;

    const NAV=styled.nav`
        position: fixed;
        top: 0;
        background-color: rgb(120, 155, 224);
        width: 100%;
        height: 12.5vh;
    `;

    const UL=styled.ul`
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        list-style-type: none;
        margin: 10px 10px 10px 10px;
        width: 30%;
        position: fixed;
        top: 2%;
        left: 50%;
        padding: 0;
    `;

    const LI=styled.li`
        padding: 3px;
        color: green;
        min-width: 100px;
        font-weight: bold;
        
    `;

    const H1=styled.h1`
        color: green;
        position: fixed;
        font-size: 3rem;
        margin: 20px;
        display: inline;
    `;

    const A=styled.a`
        text-decoration: none;
    `;

    const BUTTON=styled.button`
        position: fixed;
        top: 30px;
        right: 20px;
        color: green;
        background-color: #789BE0FF;
        text-decoration: none;
        border: 3px green solid;
        border-radius: 30px;
        height: 3rem;
        width: 7rem;
        font-size: 15px;
        font-family: "Outfit", sans-serif;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: inherit;
    `;
    const scrollfnc=()=>{
        const element=document.getElementById("main");
        element?.scrollIntoView({behavior:"smooth"})
    }
    return(
        <>
            <DIV id={"block1"}>

                <NAV>
                    <A href={"#"}><H1 className={"outfit-abc1"}>EVECTRA</H1></A>
                    <UL>
                        <DIV className={"navtags"}><A href={"#"}><LI className={"outfit-abc1"}>HOME</LI></A></DIV>
                        <DIV className={"navtags"}><A href={"#"}><LI className={"outfit-abc1"}>SOLUTIONS</LI></A></DIV>
                        <DIV className={"navtags"}><A href={"#"}><LI className={"outfit-abc1"}>ABOUT</LI></A></DIV>
                        <DIV className={"navtags"}><A href={"#"}><LI className={"outfit-abc1"}>TECHNOLOGY</LI></A></DIV>
                        <BUTTON id={"button2"} onClick={scrollfnc}>CONTACT US</BUTTON>
                    </UL>
                </NAV>
            </DIV>
        </>
    )
}



export default Navbar

























