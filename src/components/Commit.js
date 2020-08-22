import React from 'react';


function Commit({commit}) {
  return (
    <div style={{
      width: "100%",
      marginRight: "20px",
      color: "#808080"
    }}>
      {commit}
    </div>
  )
}

export default Commit;