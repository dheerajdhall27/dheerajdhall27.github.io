import React from 'react';
import { ALGORITHMS_ARRAY } from '../../../common/Constants';
import AlgorithmButtonComponent from './algorithm_buttons_component/AlgorithmButtonComponent';
import OrderingComponent from './ordering_component/OrderingComponent';
import {MIN_BARS, MAX_BARS, MIN_SPEED, MAX_SPEED} from "../../../common/Constants";
import './ButtonComponent.css';
/**
 * This component is responsible for rendering the button that are part of the application.
 * @param {props} This refers to the properties passed by the Sorting Component
 */

const ButtonComponent = (props) => {

  const getInputValue = (e) => {
    return Number(e.target.value);
  }


  // const setOrderByAscending = (e) => {
  //   props.setOrderByAscending(e.target.value === "increasing")
  // }

  return (
    <div >
      <div className="sort-controls">
        <div className="sort-component">
          <AlgorithmButtonComponent algorithmData = {ALGORITHMS_ARRAY}
                                    setAlgorithmType = {props.setAlgorithmType}
                                    algorithmType = {props.algorithmType}
                                    setAlgoRunning = {props.setAlgoRunning}
                                    algoRunning = {props.algoRunning}
                                    />
        </div>

        <div className="sort-component">
          <OrderingComponent setOrderByAscending={props.setOrderByAscending}
                             orderData={["INCREASING", "DECREASING"]}
                             orderByType= {props.orderByType}
                             setAlgoRunning = {props.setAlgoRunning}
                             algoRunning = {props.algoRunning}/>
        </div>

        <div className="sort-component">
          <label>SPEED: </label>
            <input type="range"
                   min={MIN_SPEED}
                   max={MAX_SPEED}
                   className="speed-slider"
                   disabled={props.algoRunning}
                   onChange={e => props.setAlgoSpeed(MAX_SPEED - (getInputValue(e) - MIN_SPEED))}/>
        </div>

        <div className="sort-component">
          <label>BARS: </label>
            <input type="range"
                   min={MIN_BARS}
                   max={MAX_BARS}
                   disabled={props.algoRunning}
                   className="bar-slider"
                   onChange={e => props.setBars(getInputValue(e))}/>
        </div>

        <div className="sorting-component-buttons">
          <div className="sort-component">
            <button className="sort-btn" 
                    disabled={props.algoRunning}
                    onClick={() => props.sortTheData()}>
              SORT
            </button>
          </div>

          <div className="sort-component">
            <button className="stop-btn" 
                    onClick={() => props.stopAndRefresh()}>
              STOP
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ButtonComponent;