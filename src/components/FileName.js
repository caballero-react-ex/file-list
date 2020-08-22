import React from 'react';
import './FileName.css';


function FileName({name, icon}) {
  return (
    <div className="file-name">
      <div 
        className="flex"
      >
        <span 
            className="material-icons"
            style={{
              width: "20px",
              marginRight: "10px",
              fontSize: "20px",
              padding: "0px"
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