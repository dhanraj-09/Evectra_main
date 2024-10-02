import Contactus from "./Contactus.jsx";
import Navbar from "./Navbar.jsx";
import {styled} from "styled-components";
import back from "../assets/back.mp4"
import "../style/Homestyle.css";
import ig from "../assets/ig.png"
import linkedin from "../assets/linkedin.avif"


function Home1()
{
    const DIV=styled.div``;
    const VIDEO=styled.video``;
    const SOURCE=styled.source``;
    const BR=styled.br``;
    const PRE=styled.pre``;
    const P=styled.p``;
    const A=styled.a``;
    const H1=styled.h1``;
    const STRONG=styled.strong``;
    const H2=styled.h2`
        color: #7a8581;
        margin: 0 0 0 0;
        font-family: "Maven Pro", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-size: 50px;
        font-style: normal;
    `;
    const IMAGE=styled.img``;


    return(
        <>
            <Navbar></Navbar>
            <DIV id={"mainpage"}>
            </DIV>
            <DIV id={"block2"}>
                <VIDEO id={"backclip"} autoPlay={true} muted={true} loop={true}>
                    <SOURCE src={back} type={"video/mp4"}></SOURCE>
                </VIDEO>
                <DIV id={"quotes1"}>
                    <H2>THE RIGHT ENERGY CAN TAKE YOU ANYWHERE</H2>
                    <P id={"quotesptag"}>There is no limit for transfer of energy even if its wireless. Our Indian based startup has communications and connections which can help us build a very clean and efficient roadway system.</P>
                </DIV>
            </DIV>
            <DIV id={"block3"}>
                <H1 id={"heading1"}>Addressed Problems & their Solutions:</H1>
                    <DIV id={"part1"}>
                        <DIV className={"topi1"}><PRE className={"paras"} id={"paras1"}><STRONG className={"headings"}>PROBLEM </STRONG> <BR></BR>                    Restricted Range: Current wireless power transfer <BR></BR>                    technologies have a limited range, which makes it difficult <BR></BR>                    to charge moving vehicles.<BR></BR></PRE></DIV>
                        <DIV className={"topi1b"}><PRE className={"paras"} id={"paras2"}> <STRONG className={"headings"}>SOLUTION </STRONG> <BR></BR>                    Extended Range: My invention uses a very new, innovative <BR></BR>                    coil design and new materials, which extend considerably <BR></BR>                    the range of wireless power transfer, thereby making <BR></BR>                    vehicle-on-the-move charging possible.<BR></BR></PRE></DIV>
                    </DIV>
                    <DIV id={"part2"}>
                        <DIV className={"topi2"}><PRE className={"paras"} id={"paras3"}> <STRONG className={"headings"}>PROBLEM </STRONG><BR></BR>                    Inefficient Performance: Wireless charging technologies <BR></BR>                    are low in their efficiency index and hence lead to overall <BR></BR>                    charging times and energy expenditures.<BR></BR></PRE></DIV>
                        <DIV className={"topi2b"}><PRE className={"paras"} id={"paras4"}><STRONG className={"headings"}>SOLUTION </STRONG><BR></BR>                    Higher Efficiency: This technology utilizes advanced resonant <BR></BR>                    circuits with optimized coil designs to enhance the efficiency <BR></BR>                    of wireless charging, thereby cutting energy losses and <BR></BR>                    increasing charge times.<BR></BR></PRE></DIV>
                    </DIV>
                    <DIV id={"part3"}>
                        <DIV className={"topi3"}><PRE className={"paras"} id={"paras5"}> <STRONG className={"headings"}>PROBLEM </STRONG><BR></BR>                    Elevated Expenses: The implementation of wireless charging <BR></BR>                    infrastructure entails considerable costs, presenting an <BR></BR>                    obstacle to its extensive adoption.<BR></BR></PRE></DIV>
                        <DIV className={"topi3b"}><PRE className={"paras"} id={"paras6"}> <STRONG className={"headings"}>SOLUTION </STRONG><BR></BR>                    Cost-Effective: The modular design and state-of-the-art <BR></BR>                    materials my invention uses reduce the cost of setting up <BR></BR>                    wireless charging infrastructure and make it more <BR></BR>                    affordable for a wider user base.<BR></BR></PRE></DIV>
                    </DIV>
                    <DIV id={"part4"}>
                        <DIV className={"topi4"}><PRE className={"paras"} id={"paras7"}> <STRONG className={"headings"}>PROBLEM </STRONG><BR></BR>                    Safety Considerations: There is a concern about the safety <BR></BR>                    of wireless charging with regard to electromagnetic radiation <BR></BR>                    that might interfere with other electronic devices.<BR></BR></PRE></DIV>
                        <DIV className={"topi4b"}><PRE className={"paras"} id={"paras8"}><STRONG className={"headings"}>SOLUTION </STRONG><BR></BR>                   Improved Safety: The proposed invention shall incorporate <BR></BR>                   advanced safety features, such as electromagnetic shielding <BR></BR>                   and foreign object detection, to reduce the risks associated <BR></BR>                   with wireless charging.<BR></BR></PRE></DIV>
                    </DIV>
            </DIV>
           <DIV>
               <Contactus></Contactus>
           </DIV>
            <DIV id={"footer"}>
                <H1 id={"footerheading"}>CONNECT WITH US ON SOCIAL MEDIA</H1>
                <DIV className={"social"} id={"insta"}><A href={"https://www.instagram.com/evectra.india?igsh=cW9sem45YW04ZTNi"}><IMAGE src={ig} height={"50px"} width={"50px"}></IMAGE></A></DIV>
                <DIV className={"social"} id={"linkedin"}><A href={"https://www.linkedin.com/company/indevectra/"}><IMAGE height={"50px"} width={"50px"} src={linkedin}></IMAGE></A></DIV>
            </DIV>
        </>
    )
}

export default Home1;