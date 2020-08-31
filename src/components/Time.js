import React from 'react';
import moment from 'moment';


function Time({timestamp}) {
  const timeString = moment(timestamp).fromNow();
  return (
    <div style={{
      width: "250px",
      textAlign: "right",
      alignSelf: "flex-end",
      color: "#808080",
    }}>
      {timeString}
    </div>
  )
}

export default Time;


