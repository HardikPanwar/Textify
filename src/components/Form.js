import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState('');

  //   UpperCase
  const toUpperCase = () => {
    let Newtext = text.toUpperCase();
    setText(Newtext);
  };
  // LowerCase
  const toLowerCase = () => {
    let Newtext = text.toLowerCase();
    setText(Newtext);
  };
  // Clearing Text
  const clearText = () => {
    setText('');
  };
  //  Voice text
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const CamelCase = () => {
    const newcase = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
            {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
    setText(newcase) ;
  }

  const copyToClipboard = (e) =>{
    e.preventDefault();
    navigator.clipboard.writeText(text);
    alert("Copied to Clipboard")
  }
  const onhandleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log("fired")
  };
  return (
    <>
      <div> 
      <div id="liveAlertPlaceholder"></div>
        <div className="container mb-2">
          <h1 className="" >{props.heading}</h1>
          <textarea
            className="form-control"
            value={text} 
            placeholder="Enter your text here"
            onChange={onhandleChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-2 mx-2 " onClick={toUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2 " onClick={toLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-2 mx-2 " onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary my-2 mx-2 " onClick={CamelCase}>
          Convert to CamelCase
        </button>
        <button className="btn btn-primary my-2 mx-2 " id="liveAlertBtn"onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
        
        


        <button className="btn btn-primary my-2 mx-2 " onClick={clearText}>
          Clear
        </button>
        </div>
        <div className="container">
        <h2>Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>you can read all the words in {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </div>
     
    </>
  );
}

export default Form;
