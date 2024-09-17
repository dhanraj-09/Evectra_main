import {styled} from "styled-components";
import "./Homestyle.css";
import back from "./back.mp4";
    
function Home1()
{
    const BR=styled.br``;
    
    const P=styled.p`
        color: white;
    `;

    const DIV=styled.div`
        
    `;

    const A=styled.a`
        
    `;

    const DIV4=styled.div`
        display: block;
        background-color: rgba(57, 57, 58, 0.78);
        opacity: 50%;
        height: 300px;
        width: 100%;
    `;

    const component2=()=>{
        const element=document.getElementById("2");
        element?.scrollIntoView({behavior:"smooth"})
    }
    const component3=()=>{
        const element=document.getElementById("3");
        element?.scrollIntoView({behavior:"smooth"})
    }
    const component4=()=>{
        const element=document.getElementById("4");
        element?.scrollIntoView({behavior:"smooth"})
    }
    const component5=()=>{
        const element=document.getElementById("5");
        element?.scrollIntoView({behavior:"smooth"})
    }
    const component1=()=>{
        const element=document.getElementById("1");
        element?.scrollIntoView({behavior:"smooth"})
    }
    const DIV99=styled.div`
        position: relative;
        bottom:300px;
        left: 580px;
        display: inline-block;
        justify-content: revert;
        align-items: center;
        font-size: 27px;
        
    `;


    const IMAGE1=styled.img`
        height: 300px;
        width: 300px;
        position: relative;
        top: -440px;
        left: 1000px;
    `;


    const SOURCE=styled.source`
    
`;
    const BUTTON=styled.button`
        
    `;
    const VIDEO=styled.video`
        max-height: 80%;
        max-width: 80%;
        position: relative;
        top: 50px;
        
`;

    const VDIV=styled.div`
       
        
       
    `;

    const H1=styled.h1`
        color: white;
        margin-left: 40px;
        position: relative;
        top: -250px;
        font-size:70px;
    `;

    return(
        <>
           <DIV id={"block"}>
               <VDIV>
                   <VIDEO autoPlay={true} muted={true} loop={true}>
                       <SOURCE src={back} type={"video/mp4"}></SOURCE>
                   </VIDEO>
               </VDIV>
               <IMAGE1 src={"./public/logo_main_page-0001.jpg"} ></IMAGE1>
               <DIV99>
                   <P>A CONTINUOUS WIRELESS CHARGING METHOD</P>
                   <P> FOR ELECTRIC VEHICLES WHILE DRIVING</P>
               </DIV99>
           </DIV>
            <DIV class={"container"}>
                <BUTTON type={"button"} id={"card1"} onClick={component1} >RANGE</BUTTON>
                <BUTTON type={"button"} id={"card2"} onClick={component2} >PERFORMANCE</BUTTON>
                <BUTTON type={"button"} id={"card3"} onClick={component3} >EXPENSES</BUTTON>
                <BUTTON type={"button"} id={"card4"} onClick={component4} >SAFETY</BUTTON>
                <BUTTON type={"button"} id={"card5"} onClick={component5} >HASSLE</BUTTON>
            </DIV>
        <DIV>
            <DIV>
                <H1 id={"1"}>RANGE</H1>
                <P className={"all"}>--Restricted Range: Current wireless power transfer technologies have a limited range, which makes it difficult to charge moving vehicles.</P>
                <P className={"all"}>---- Extended Range: My invention uses a very new, innovative coil design and new materials, which extend <BR></BR> considerably the range of wireless power transfer, thereby making vehicle-on-the-move charging possible.</P>
            </DIV>
            <DIV>
                <H1 id={"2"}>SAFETY</H1>
                <P className={"all"}>-- Safety Considerations: There is a concern about the safety of wireless charging with regard to electromagnetic radiation <BR></BR> that might interfere with other electronic devices.</P>
                <P className={"all"}>---- Improved Safety: The proposed invention shall incorporate advanced safety features, such as electromagnetic shielding and foreign object detection, to reduce the risks associated with wireless charging.</P>
            </DIV>
            <DIV>
                <H1 id={"3"}>EXPENSES</H1>
                <P className={"all"}>-- Elevated Expenses: The implementation of wireless charging infrastructure entails considerable costs, presenting an obstacle to its extensive adoption</P>
                <P className={"all"}>---- Cost-Effective: The modular design and state-of-the-art materials my invention uses reduce the cost of setting up <BR></BR> wireless charging infrastructure and make it more affordable for a wider user base.</P>
            </DIV>
            <DIV>
                <H1 id={"4"}>PERFORMANCE</H1>
                <P className={"all"}>--Inefficient Performance: Wireless charging technologies are low in their efficiency index and hence lead to overall<BR></BR> charging times and energy expenditures.</P>
                <P className={"all"}>----Higher Efficiency: This technology utilizes advanced resonant circuits with optimized coil designs to enhance the efficiency of wireless charging, thereby cutting energy losses and increasing charge times</P>
            </DIV>
            <DIV id={"5"}>
                <H1>HASSLE</H1>
                <P className={"all"}>--Hassle: Wired charging needs the car to stop and plug in, which may bother drivers.</P>
                <P className={"all"}>----Convenience: My invention has enabled on-the-go charging, meaning the vehicle can be charged while in motion; <BR></BR>hence, no need ever to stop by the power stations.</P>
            </DIV>
        </DIV>
            <DIV4>
                <A></A>
            </DIV4>
        </>
    )
}

export default Home1












































