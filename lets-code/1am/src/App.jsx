import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bot from './components/Bot';
import CodeEditor from './codeEditor/CodeEditor';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define route for Bot */}
        <Route path="/" element={<><Home/> <Bot/></>} />

        {/* Define route for CodeEditor (second app) */}
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
