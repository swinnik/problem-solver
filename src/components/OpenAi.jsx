import React, { useState } from "react";
import axios from "axios";
import resume from "../assets/data/resume.js";
import problems from "../assets/data/problems.js";

const OpenAIChatComponent = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true); // Set loading state

    try {
      const response = await axios.post(
        "https://52t63jw4a5.execute-api.us-west-2.amazonaws.com/solve-stage/solve",
        {
          inputText,
          resume,
        }
      );

      setResponseText(response.data.responseText);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      setResponseText(["An error occurred."]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.section}>
      <h1>Problem Solver</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter a problem..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleButtonClick();
            }
          }}
        />
        <button style={styles.button} onClick={handleButtonClick}>
          Solve Problem
        </button>
      </div>
      {problems.map((problem) => {
        return (
          <h3
            key={problem}
            onClick={setInputText.bind(this, problem)}
            style={styles.option}
          >
            {problem}
          </h3>
        );
      })}
      <div>
        {isLoading ? (
          <>
            <h2>Response:</h2>
            <div>Thinking of a solution...</div>
          </>
        ) : (
          responseText && (
            <>
              <h2>Response:</h2>
              <div>{responseText}</div>
            </>
          )
        )}
      </div>
      <div style={{ height: "100px" }} />
    </div>
  );
};

const styles = {
  section: {
    // top: 100,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "10px",
    color: "black",
    margin: "15%",
  },
  form: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    width: "60%",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "8px 8px",
    minHeight: "40px",
  },

  button: {
    // height: "50px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "12px 12px",
  },
  option: {
    cursor: "pointer",
    fontSize: "1.2em",
  },
};

export default OpenAIChatComponent;
