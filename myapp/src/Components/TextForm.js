import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const convertUppercase = () => {
    setText(text.toUpperCase());
    props.showalert("The text successfuly coverted to upperCase", "Success");
  };
  const convertLowerCase = () => {
    setText(text.toLowerCase());
    props.showalert("text Successflly converted to lowercase", "success");
  };

  const clearText = () => {
    setText("");
  };

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(text);
  //   props.showToast(
  //     "message Copied to clipboard successfully",
  //     "Message Copied"
  //   );
  //   setTimeout(() => {
  //     props.showToast(null);
  //   }, 1500);
  // };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showToast("Text copied to clipboard!", "Copied!");
  };

  const extractEmails = () => {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailPattern) || [];
    setText(emails.join(", "));
  };

  const getWordCount = () => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "");
    return words.length;
  };

  const getCharacterCount = () => {
    return text.length;
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Text Utility App</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="6"
          placeholder="Enter your text here..."
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="button-group mb-4">
        <button className="btn btn-primary me-2" onClick={convertUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info me-2" onClick={convertLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning me-2" onClick={extractEmails}>
          Extract Emails
        </button>
        <button className="btn btn-success me-2" onClick={copyToClipboard}>
          Copy Text
        </button>
        <button className="btn btn-danger" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Text Summary</h5>
          <p className="card-text">
            Words: <strong>{getWordCount()}</strong>
          </p>
          <p className="card-text">
            Characters: <strong>{getCharacterCount()}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
