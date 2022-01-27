import React from "react";

const PoolPopup = props => {
  return (
    <div className="poolpopup-box">
      <div className="pool-box">
        {props.content}
        <span className="close-popup" onClick={props.handleClose}>x</span>
      </div>
    </div>

    
  );
};
 
export default PoolPopup;