import {styled} from "styled-components";
import Navbar from "../components/Navbar.jsx";
import carpic from "../assets/carpic.jpeg";
import "../style/Homestyle.css";
import {Snowfall} from "react-snowfall";
function Home()
{

    const DIV=styled.div``;
    const IMG =styled.img``;
    const SPAN=styled.span``;

    return(
        <>
            <Navbar></Navbar>
            <Snowfall></Snowfall>
            <DIV>
                <DIV id={"block1"}>
                    <DIV className={"container-a"}>
                        <DIV>
                            <DIV></DIV>
                            <DIV></DIV>
                        </DIV>
                        <DIV id={"tag3"}>Discover the future of electric vehicle charging with Evectra India. Our cutting-edge wireless solutions ensure effortless energy transfer for a sustainable tomorrow.</DIV>
                        <DIV><SPAN id={"Rev"}>Revolutionize Your EV Charging Experience</SPAN></DIV>
                        <DIV id={"upper2"}>
                            <SPAN className={"one"} id={"tag1"}>Latest in EV Charging</SPAN>
                            <SPAN className={"one"} id={"tag2"}>Introducing our Advanced Charging Solutions</SPAN>
                        </DIV>
                    </DIV>
                    <IMG id={"img1"} src={carpic} height={"100%"} width={"45%"} ></IMG>

                </DIV>
            </DIV>
            <DIV id={"aa"}>

            </DIV>
        </>
    )
}



export default Home;