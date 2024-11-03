import React, { useState, useRef } from 'react';

export default function TextForm() {
    const [text, setText] = useState("");
    const [findText, setFindText] = useState("");
    const [replaceText, setReplaceText] = useState("");
    const textBoxRef = useRef(null);  

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleBlankSpace = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
    }

    const handleCopy = () => {
        const text = textBoxRef.current.value;
        navigator.clipboard.writeText(text)
            .then(() => alert('Your Text is copied to clipboard!'))
            .catch(err => console.error('Failed to copy text:', err));
    }

    const handleClearClick = () => {
        setText('');
        setFindText('');
        setReplaceText('');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleTextReverse = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
    }

    const handleFindReplace = () => {
        let newText = text.replace(new RegExp(findText, 'g'), replaceText);
        setText(newText);
    }

    const handleDuplicateLineRemoval = () => {
        let lines = text.split('\n');
        let uniqueLines = [...new Set(lines)];
        setText(uniqueLines.join('\n'));
    }

    return (
        <>
            <div className="container my-4">
                <h1>Enter your text here:</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        ref={textBoxRef}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="10"
                    ></textarea>
                </div>
                <button type="button" className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-success mx-1" onClick={handleBlankSpace}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-dark mx-1" onClick={handleClearClick}>All Clear</button>
                <button type="button" className="btn btn-info mx-1" onClick={handleTextReverse}>Reverse Text</button>
                <button type="button" className="btn btn-warning mx-1" onClick={handleDuplicateLineRemoval}>Remove Duplicate Lines</button>

                <div className="my-3">
                    <h3>Find and Replace</h3>
                    <input
                        type="text"
                        placeholder="Find text"
                        className="form-control my-1"
                        value={findText}
                        onChange={(e) => setFindText(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Replace with"
                        className="form-control my-1"
                        value={replaceText}
                        onChange={(e) => setReplaceText(e.target.value)}
                    />
                    <button type="button" className="btn btn-secondary my-1" onClick={handleFindReplace}>Replace</button>
                </div>
            </div>

            <div className="container my-5">
                <h2>Your text summary:</h2>
                <hr/>
                <p>{text.split(" ").filter(word => word).length} <b>Words</b> and {text.length} <b>Characters</b></p>
                <h2>Preview</h2>
                <hr/>
                <p>{text}</p>
            </div>
        </>
    );
}
