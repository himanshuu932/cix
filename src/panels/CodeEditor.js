import React, { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("<h1>Hello, World!</h1>");

  const handleRunCode = () => {
    const newWindow = window.open("", "_blank"); // Open a new browser window
    newWindow.document.open();
    newWindow.document.write(code); // Write the HTML code into the new window
    newWindow.document.close();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>HTML Code Editor</h1>
      <textarea
        style={styles.textarea}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your HTML code here..."
      />
      <button style={styles.button} onClick={handleRunCode}>
        Run Code
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    color: "#fff",
    marginBottom: "20px",
  },
  textarea: {
    width: "80%",
    height: "300px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#66a6ff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#559ae9",
  },
};

export default CodeEditor;
