import React from 'react'

/**
 * This component represents each individual bar component 
 * @param {props} This refers to the properties passed over from the Graph Component
 */
const BarComponent = (props) => {
  const barStyle = {
    backgroundColor: props.barIndicesToColor.includes(props.index) ? "lightgreen" : "lightblue",
    width: `${95/props.length}%`,
    height: `${props.data * 30 / 80}vh`,
    border: "1px solid black",
    borderRadius: "5px",
  };

  return (
    <div key={props.index}
         className="bars"
         style={barStyle}>
    </div>
  );
}

export default BarComponent;