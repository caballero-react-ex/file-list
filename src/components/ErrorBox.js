import React from 'react';

function ErrorBox(props) {
  // const {iconName, children} = props;
  console.log(props)
  return (
    <div style={{
        marginTop: `${props.marginTop}px`,
        padding: "15px",
        color: "#810000",
        backgroundColor: "#ff8484",
        border: "1px solid #810000",
        borderRadius: "5px",
      }}
    >
      <div 
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span 
          className="material-icons"
          style={{
            marginRight: "15px",
            fontSize: "45px",
          }}
        >
          {props.iconName}
        </span>
        <p style={{
            fontSize: "20px",
            margin: "0",
          }}
        >
          {props.children}
        </p>
        
      </div>
    </div>
  )
}

export default ErrorBox;