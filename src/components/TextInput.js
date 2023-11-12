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

    return (
        <>
            <div className="container my-3">
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                        onChange={handleOnChange}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">{props.Heading}</label>
                </div>
                <div className="container my-2 p-0">
                    <button
                        className="btn btn-primary m-2"
                        onClick={convertToUpper}
                    >
                        Convert to UpperCase
                    </button>
                    <button
                        className="btn btn-primary m-2"
                        onClick={convertToLower}
                    >
                        Convert to LowerCase
                    </button>
                </div>
                <div className="">Processed Text: {pText}</div>
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
