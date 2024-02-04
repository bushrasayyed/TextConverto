import React , {useState} from 'react'
import  { useRef } from 'react';

export default function TextForm() {
    const handleUpClick = ()=>
    {
console.log("Uppercase was clicked");
let newText =text.toUpperCase();
setText(newText)
    }
    const handleLoClick = ()=>
    {
console.log("Lowercase was clicked");
let newText =text.toLowerCase();
setText(newText)
    }
    const handleBlankSpace = ()=>
    {
console.log("BlankSpace was clicked");
let newText =text.split(/[ ]+/);
setText(newText.join(" "))
    }
 const textBoxRef = useRef(null);  
    const handleCopy = () => {
          const text = textBoxRef.current.value;
          navigator.clipboard.writeText(text)
            .then(() => alert('Your Text is  copied to clipbroad!'))
            .catch(err => console.error('Failed to copy text: ', err));
        }
    
    const handleClearClick = ()=>
    {
console.log("Clear was clicked");
let newText ='';
setText(newText)
    }
    const handleOnChange = (event)=>
    {
console.log("On changed");
setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container my-4">

 <h1>Enter your text here- </h1>
 <div className="mb-3">
  <textarea className="form-control" value= {text} ref={textBoxRef} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button type="button" className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button type="button" className="btn btn-success mx-1" onClick={handleBlankSpace}>Remove Extra Spaces</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>

<button type="button" className="btn btn-dark mx-1" onClick={handleClearClick}>All Clear</button>

</div>
<div className="container my-5">
    <h2>Your text summary-</h2>
    <hr/>
    <p>{text.split(" ").length-1} <b>Words</b> and {text.length} <b>Characters</b></p>
    <h2> Preview</h2><hr/>
    <p>{text}</p>

</div>
    
    </>
  )
  }
