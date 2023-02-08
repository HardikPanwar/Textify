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

  const onhandleChange = (e) => {
    // e.preventDef();/
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <div className="container mb-2">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter your text here"
            onChange={onhandleChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-2 " onClick={toUpperCase}>
          Convert to UpperCase
        </button>
        </div>
        <div className="container">
        <h1>Text Summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>you can read all the words in {0.008 * text.split(" ").length} minutes</p>
      </div>
      </div>
     
    </>
  );
}

export default Form;
