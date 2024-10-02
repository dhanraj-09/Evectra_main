import "../style/navstyle.css"
import {styled} from "styled-components";
import contactus from "./Contactus.jsx";
import eve from "../assets/eve.png";

function Navbar()
{
    const DIV=styled.div``;
    const NAV=styled.nav``;
    const UL=styled.div``;
    const LI=styled.li``;
    const A=styled.a``;
    const BUTTON=styled.button``;
    const IMG=styled.img``;


    function scrollfnc() {
        const element=document.getElementById("formdiv");
        element?.scrollIntoView({behavior:"smooth"})
    }

    return (
        <>
            <DIV id={"block_nav"}>
                <A href={"#"}><IMG id={"image"} src={eve} height={"60px"} width={"250px"}></IMG></A>
                <NAV id={"nav"}>
                    <UL id={"ul"}>
                        <A className={"list_inside"} href={"#"}><LI className={"list"}>HOME</LI></A>
                        <A className={"list_inside"} href={"#"}><LI className={"list"}>SOLUTION</LI></A>
                        <A className={"list_inside"} href={"#"}><LI className={"list"}>TECHNOLOGY</LI></A>
                        <A className={"list_inside"} href={"#"}><LI className={"list"}>ABOUT</LI></A>
                        <BUTTON id={"button"} onClick={scrollfnc}>CONTACT US</BUTTON>
                    </UL>
                </NAV>
            </DIV>
        </>
    )
}



export default Navbar

























