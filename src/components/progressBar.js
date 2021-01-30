import React from "react";
const ProgressBar = (props) => {
    const {skillName, bgcolor, completed } = props;
  
    const labelBoxStyle = {
        height: 22,
        gravity: 'top',
        overflowWrap : 'break-word'
    }
    const labelTextStyles = {
        color : 'blue',
        textAlign: 'center',
        margin: 0
    }
    const containerStyles = {
      height: 40,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      display: 'flex',
      position: 'relative',
      border: '1px solid purple',
      margin: 'auto'
    }
  
    const labelStyles = {
      color: 'green',
      fontWeight: 'bold',
      width: 'auto',
      right: 0,
      height : '60%',
      fontSize : '100%',
      position:'absolute',
      border : '1px solid yellow'
    }

    const progressBarStyle = {
        margin : '50',
        height : '70%'
    }
  
    return (
        <div style={{height:"40px"}}>
            <div style = {progressBarStyle} className="progress">
                <div  className="progress-bar" role="progressbar" aria-valuenow={props.completed} aria-valuemin="0" aria-valuemax="100" style ="width:10%;background-color:#aaa5ff !important;"></div>
            </div>
        </div>
      
    );
  };

  /*
   <div style={{height: '100px'}}>
            
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
            <div style={labelBoxStyle}><span style = {labelTextStyles}>{`${skillName}`}</span></div>
        </div>
        */
  
  export default ProgressBar;