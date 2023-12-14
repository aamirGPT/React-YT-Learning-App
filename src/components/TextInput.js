import React, { useState } from "react";

export default function TextInput(props) {
    const [text, setText] = useState("");
    const [pText, setPText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const convertToUpper = () => {
        let newText = text.toUpperCase();
        setPText(newText);
    };
    const convertToLower = () => {
        let newText = text.toLowerCase();
        setPText(newText);
    };
    const clearText = () => { 
        let newText = '';
        setText(newText);
        setPText(newText);
    }
    const reverseText = () => { 
        let reverseText = text.split('').reverse().join('');
        setPText(reverseText);
    }

    return (
        <>
            <div className="container my-3" data-bs-theme={props.mode}>
                <div className="my-3">Processed Text: {pText}</div>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                        onChange={handleOnChange}
                        value={text}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">{props.Heading}</label>
                </div>
                <div className=" btncontainer container my-2 p-0">
                    <button
                        className="btn btn-primary"
                        onClick={convertToUpper}
                        disabled={text.length === 0}
                    >
                        Convert to UpperCase
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={convertToLower}
                        disabled={text.length === 0}
                    >
                        Convert to LowerCase
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={reverseText}
                        disabled={text.length === 0}
                    >
                        Reverse Text
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={clearText}
                        disabled={text.length === 0}
                    >
                        Clear Text
                    </button>
                </div>
            </div>
            <div className="container my-3">
                <h3>Text Summary</h3>
                <p>
                    {
                        text
                            .replace(/\n/g, " ")
                            .split(" ")
                            .filter((value) => value !== "").length
                    }{" "}
                    Words, {text.trim().length} Characters
                </p>
            </div>
        </>
    );
}
