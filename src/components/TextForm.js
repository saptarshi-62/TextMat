import React, { useState } from 'react'
import Tesseract from 'tesseract.js'

//console.log();


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase Was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = () => {
        //console.log("Uppercase Was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        //var text=document.getElementById("myBox");
        //text.select();
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            props.showAlert("Processing image for text extraction...", "info");
            Tesseract.recognize(
                file,
                'eng',
                { logger: m => console.log(m) }
            ).then(({ data: { text } }) => {
                setText(text);
                props.showAlert("Text extracted from image successfully!", "success");
            }).catch((error) => {
                console.error(error);
                props.showAlert("Failed to extract text from image.", "danger");
            });
        }
    }

    const handlePascalCaseClick = () => {
        let pascalCaseText = text.replace(/\w+/g, (word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        setText(pascalCaseText);
        props.showAlert("Converted to PascalCase!", "success");
    }

    const [text, setText] = useState('');
    //setText("new Text");
    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "black" }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handlePascalCaseClick}>Convert To Pascalcase</button>
                <div className="mx-3 my-4">
                    <label htmlFor="formFile" className="form-label">Enter image file to analyze text from it</label>
                    <input className="form-control" type="file" id="formFile" onChange={handleImageUpload} style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "black" }} />
                </div>
            </div>
            <div className="container my-5" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>
        </>
    )
}
