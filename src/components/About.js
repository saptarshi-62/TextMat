import React from 'react';
//import Reac { useState } from 'react';
export default function About(props) {

    let myStyle={
        color: props.mode==="dark"?"white":"#042743",
        backgroundColor: props.mode==="dark"?"rgb(36 74 104)":"white"
    }

    /*const[myStyle, setMyStyle]=useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText,setbtnText]=useState("Enable Dark Mode")

    const toggleStyle=()=>{
        if(myStyle.color==='black'){
            setMyStyle({color: 'white', backgroundColor: 'black'})
            setbtnText("Enable Light Mode")
        }
        else{
            setMyStyle({color: 'black', backgroundColor: 'white'})
            setbtnText("Enable Dark Mode")
        }
    }*/

  return (
    <div>
      <>
      <div className="contaner">
        <h2 className="my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>About Us</h2>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextMat gives you a way to analyze your text quickly and efficiently.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextMat is a free character counter tool that provides instant character count & word count stastistics for a given Text. TextMat reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatiable</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as Chrome, Firefox, Microsoft Edge, Internet Explorer, Safari, Opera. It suits to count charactersin facebook,  blog, books, excel document, pdf document, essays etc.
            </div>
            </div>
        </div>
        </div>
        {/*<div className="container my-3" >
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div>*/}
      </div>
      
      </>
    </div>
  )
}
