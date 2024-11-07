import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { CODE_SNIPPETS } from "../constants";

// Import the CSS file
import './CodeEditor.css';

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage]);
  };

  // Handler for opening chatbot (and making API call)
  const openChatbot = async () => {
    const message = "Hello, how can I assist you today?"; // Customize the initial message
    try {
      const response = await fetch("http://localhost:5004/api/chat-complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: message }],
          model: "mixtral-8x7b-32768",
          temperature: 0.5,
          max_tokens: 1024,
          top_p: 1,
          stream: true,
          stop: null,
        }),
      });

      const data = await response.text();
      alert("Chatbot Response: " + data);
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while communicating with the backend.");
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-left">
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
          }}
          height="75vh"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>
      <Output editorRef={editorRef} language={language} />

      {/* Chatbot Button */}
      <div className="chatbot-button-container">
        <button className="discord-button" onClick={openChatbot}>
          💬 Chat
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
