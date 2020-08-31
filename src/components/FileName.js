import React from 'react';
import './FileName.css';


function FileName({name, icon}) {
  const color = icon === "folder" ? "#79b7f8" : "#808080";
  return (
    <div className="file-name">
      <div className="flex">
        <span 
            className="material-icons"
            style={{
              width: "20px",
              marginRight: "10px",
              fontSize: "20px",
              padding: "0px",
              color: `${color}`
            }}
          >
            {icon}
          </span>
        <p style={{
          marginRight: "20px",
          width: "200px",
          }}
        >
          {name}
        </p>
      </div> 
    </div>
  )
}

export default FileName;