import {styled} from "styled-components";
import "../style/contactusstyle.css";
import logo_main1 from "../assets/logo_main1.jpg";
import eve from "../assets/eve.png"

function Contactus()
{
    const DIV=styled.div``;
    const FORM=styled.form``;
    const LABEL=styled.label`
        display: block;
        color: white;
       
    `;
    const INPUT=styled.input`
        height: 3.5vh;
        width: 98.5%;
        outline: none;
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-weight: 900;
        font-style: normal;
        padding: 2px 7px 2px 7px;
    `;
    const TEXTAREA=styled.textarea` 
        border: none;
        outline: none;
        padding: 10px;
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    `;
    const H1=styled.h1`
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;    
        margin: 0 10px 10px 10px;
        padding-top: 20px;
        color: white;
    `;
    const BUTTON=styled.button`
        
    `;
    const basic=(evt)=>{
        evt.preventDefault();
    }
    return (
        <DIV id={"main"}>
            <DIV id={"container"}>
                <DIV id={"formdiv"}>
                    <FORM id={"form"} action={""}>
                        <H1 className={"manrope-abc"}>GET IN TOUCH</H1>
                        <DIV className={"com1"}>
                            <LABEL id={"name"} className={"co1"}>NAME </LABEL>
                            <INPUT className={"co1"}  type={"text"}></INPUT>
                        </DIV>
                        <DIV className={"com2"}>
                            <LABEL id={"email"} className={"co2"}>EMAIL </LABEL>
                            <INPUT className={"co2"} type={"email"} ></INPUT>
                        </DIV>
                        <DIV className={"com3"}>
                            <LABEL id={"company"} className={"co3"}>COMPANY NAME </LABEL>
                            <INPUT className={"co3"} type={"text"}></INPUT>
                        </DIV>
                        <DIV className={"com4"}>
                            <LABEL id={"reason"}  className={"co4"}>REASON FOR CONTACT</LABEL>
                            <TEXTAREA className={"co4"} rows={5} cols={45}></TEXTAREA>
                        </DIV>
                        <DIV id={"buttondiv"}><BUTTON class={"button1"} id={"button1"} type={"submit"} onSubmit={basic}>SUBMIT</BUTTON></DIV>
                    </FORM>
                </DIV>
            </DIV>
        </DIV>
    )
}




export default Contactus;











































