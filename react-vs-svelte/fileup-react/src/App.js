import React, { useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload";
function App() {
  const [files, setFiles] = useState([]);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <FileUpload multiple={true} filesCallback={setFiles}>
        <p>React wants you to select some Files:</p>
        <ul>
          {files.map(f => (
            <li>{f.name}</li>
          ))}
        </ul>
      </FileUpload>
      <FileUpload multiple={true} />
    </div>
  );
}

export default App;
