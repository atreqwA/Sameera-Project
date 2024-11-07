import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      alert(error.message || "Unable to run code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: "50%", padding: "1rem" }}>
      <p style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>Output</p>
      <button
        style={{
          backgroundColor: "transparent",
          color: "#48BB78",
          border: "2px solid #48BB78",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
        onClick={runCode}
        disabled={isLoading}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      <div
        style={{
          height: "75vh",
          padding: "1rem",
          color: isError ? "red" : "inherit",
          border: "1px solid",
          borderRadius: "5px",
          borderColor: isError ? "red" : "#333",
          overflowY: "scroll",
        }}
      >
        {output
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
