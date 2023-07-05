import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [background, setBackground] = useState("white");
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const toggleBackground = () => {
    //update setBackground using ternary
    setBackground((prevBackground) =>
      prevBackground === "white" ? "lightgray" : "white"
    );
  };

  const incrementCounter = () => {
    // change increment by one
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      console.log("Submitted:", inputValue);
      // clear input value
      setInputValue("");
      setShowModal(true);
      setError(null);
    } else {
      console.log("Setting error message"); 
      setError("Please enter something before submitting!");
    }
  };
  

  const closeModal = () => {
    //update setShowModal State to close modal
    setShowModal(false);
  };

  return (
    <div className="container" style={{ background }}>
      <h1 className="title">React App</h1>

      <button className="toggle-btn" onClick={toggleBackground}>
        Toggle Background
      </button>

      <p className="counter">Counter: {counter}</p>
      {/* add onClick attribute and call incrementCounter function */}
      <button className="increment-btn" onClick={incrementCounter}>
        Increment Counter
      </button>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button
          className="submit-btn"
          type="submit"
        >
          Submit
        </button>
      </form>

    {/* render error message when error exists */}
      {error && <p className="error-message">{error}</p>}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Thanks for submitting your response!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
