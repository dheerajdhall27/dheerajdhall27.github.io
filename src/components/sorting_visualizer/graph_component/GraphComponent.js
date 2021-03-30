import React, {useState} from "react";
import BarComponent from "./BarComponent";

/**
 * This component is responsible for rendering the bar component
 * @param {props} The properties passed from the Sorting Component
 */
const GraphComponent = (props) => {
  
  return (
    <div className="graph-panel">
      {
        props.barData && props.barData.map((data, index, arr) => 
          <BarComponent key={index}
                        data = {data}
                        barIndicesToColor={props.barIndices}
                        length = {arr.length}
                        index = {index}/>
        )
      }
    </div>
  )
}

export default GraphComponent;