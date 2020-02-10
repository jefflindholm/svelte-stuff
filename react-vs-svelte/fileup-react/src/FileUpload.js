import React, { useState } from "react";

export default function FileUpload({
  children,
  filesCallback,
  multiple = true
}) {
  const [files, setFiles] = useState([]);
  const handleChange = e => {
    console.log(e.target.files);
    const newFile = Array.from(e.target.files);
    setFiles(newFile);
    filesCallback && filesCallback(newFile);
  };
  return (
    <>
      <input type="file" multiple={multiple} onChange={handleChange} />
      {children || (
        <>
          <p>"Select some files"</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {files.map(f => (
                <tr key={f.name}>
                  <td>{f.name}</td>
                  <td>{f.size}</td>
                  <td>{f.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
