import Contactus from "./Contactus.jsx";
import Navbar from "./Navbar.jsx";
import {styled} from "styled-components";
import back from "./back.mp4"
import "./Homestyle.css";
import footpic from "./footpic.jpg"
import pic4 from "./pic4.jpg"
import pic2 from "./pic2.webp"
import main1 from "./main1.jpg"
import ig from "./ig.png"
import linkedin from "./linkedin.avif"
function Home1()
{
    const HR=styled.br`
        margin-top: 13vh;
        height: 2px;
        width: 100%;
        color: white;
    `;


    const DIV=styled.div`
        
        
    `;
    const VIDEO=styled.video`
       
    `;

    const SOURCE=styled.source``;
    const I=styled.i``;
    const BR=styled.br``;
    const P=styled.p`
        
    `;

    const A=styled.a`
        
    `;

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
    const IMAGE=styled.img`
        
    `;
    return(
        <>
            <Navbar>

            </Navbar>
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
                        <DIV className={"topi1"}><P className={"paras"} id={"paras1"}><STRONG>PROBLEM </STRONG>• 	Restricted Range: Current wireless power transfer technologies have a limited range, which makes it difficult to charge moving vehicles.<BR></BR></P></DIV>
                        <DIV className={"topi1b"}><P className={"paras"} id={"paras2"}> <STRONG>SOLUTION </STRONG>• 	 Extended Range: My invention uses a very new, innovative coil design and new materials, which extend considerably the range of wireless power transfer, thereby making vehicle-on-the-move charging possible.<BR></BR></P></DIV>
                    </DIV>
                    <DIV id={"part2"}>
                        <DIV className={"topi2"}><P className={"paras"} id={"paras3"}> <STRONG>PROBLEM </STRONG> •	Inefficient Performance: Wireless charging technologies are low in their efficiency index and hence lead to overall charging times and energy expenditures.<BR></BR></P></DIV>
                        <DIV className={"topi2b"}><P className={"paras"} id={"paras4"}><STRONG>SOLUTION </STRONG>• 	 Higher Efficiency: This technology utilizes advanced resonant circuits with optimized coil designs to enhance the efficiency of wireless charging, thereby cutting energy losses and increasing charge times.<BR></BR></P></DIV>
                    </DIV>
                    <DIV id={"part3"}>
                        <DIV className={"topi3"}><P className={"paras"} id={"paras5"}> <STRONG>PROBLEM </STRONG>  •	Elevated Expenses: The implementation of wireless charging infrastructure entails considerable costs, presenting an obstacle to its extensive adoption.<BR></BR></P></DIV>
                        <DIV className={"topi3b"}><P className={"paras"} id={"paras6"}> <STRONG>SOLUTION </STRONG>• 	 Cost-Effective: The modular design and state-of-the-art materials my invention uses reduce the cost of setting up wireless charging infrastructure and make it more affordable for a wider user base.<BR></BR></P></DIV>
                    </DIV>
                    <DIV id={"part4"}>
                        <DIV className={"topi4"}><P className={"paras"} id={"paras7"}> <STRONG>PROBLEM </STRONG>  •	Safety Considerations: There is a concern about the safety of wireless charging with regard to electromagnetic radiation that might interfere with other electronic devices.<BR></BR></P></DIV>
                        <DIV className={"topi4b"}><P className={"paras"} id={"paras8"}><STRONG>SOLUTION </STRONG>• 	 Improved Safety: The proposed invention shall incorporate advanced safety features, such as electromagnetic shielding and foreign object detection, to reduce the risks associated with wireless charging.<BR></BR></P></DIV>
                    </DIV>
            </DIV>
            <Contactus></Contactus>
            <DIV id={"footer"}>
                <H1 id={"footerheading"}>CONTACT US ON SOCIAL MEDIA</H1>
                <DIV className={"social"} id={"insta"}><A href={"https://www.instagram.com/evectra.india?igsh=cW9sem45YW04ZTNi"}><IMAGE src={ig} height={"50px"} width={"50px"}></IMAGE></A></DIV>
                <DIV className={"social"} id={"linkedin"}><A href={"https://www.linkedin.com/company/indevectra/"}><IMAGE height={"50px"} width={"50px"} src={linkedin}></IMAGE></A></DIV>
            </DIV>
        </>
    )
}

export default Home1;