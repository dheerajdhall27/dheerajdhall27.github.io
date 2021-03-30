import React, {useState, useEffect} from 'react';
import {MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, MIN_BARS, MAX_SPEED} from "../../common/Constants";
import { AlgorithmFactory } from "../../util/sorting_algorithms/AlgorithmFactory";
import ButtonComponent from '../../components/sorting_visualizer/button_component/ButtonComponent';
import GraphComponent from '../../components/sorting_visualizer/graph_component/GraphComponent';
import './SortingContainer.css';

/**
 * This Component is the main component which holds the state for the
 * 1. Bars
 * 2. Algorithm Type
 * 3. The order of Sorting
 */
const SortingContainer = () => {
  const [totalBars, setBars] = useState(MIN_BARS);
  const [barIndices, setBarIndex] = useState([]);
  const [algorithmType, setAlgorithmType] = useState("SELECTION_SORT");
  const [orderByType, setOrderByAscending] = useState("INCREASING");
  const [algoSpeed, setAlgoSpeed] = useState(MAX_SPEED);
  const [algoRunning, setAlgoRunning] = useState(false);
  const [currentAlgoObject, setAlgoObject] = useState(null);

  const createRandomBars = () => {
    return [...Array(totalBars)].map(() => Math.floor(Math.random() * (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT) + MIN_BAR_HEIGHT))
  }

  const [barData, setBarData] = useState(createRandomBars());

  const sortTheData = () => {
    setAlgoRunning(true);
    let algorithmFactory = new AlgorithmFactory(algorithmType, barData, orderByType);
    let algorithm = algorithmFactory.createAlgorithm(algorithmType);
    setAlgoObject(algorithm);
    algorithm.sort([...barData], orderByType, algoSpeed); 
  }

  const stopAndRefresh = () => {
    setAlgoRunning(false);
    setBarData(createRandomBars());
    currentAlgoObject.stopAnimation();
  }

  useEffect(() => {
    setBarData(createRandomBars())

  },[totalBars])

  return (
    <div className="main-panel">
      <div className="left-panel">
        <ButtonComponent setBars={setBars} 
                        setAlgorithmType={setAlgorithmType}
                        setOrderByAscending={setOrderByAscending}
                        sortTheData={sortTheData}
                        setAlgoSpeed={setAlgoSpeed}
                        algorithmType={algorithmType}
                        orderByType={orderByType}
                        setAlgoRunning={setAlgoRunning}
                        algoRunning={algoRunning}
                        stopAndRefresh={stopAndRefresh}/>
      </div>

      <div className="right-panel">
        <GraphComponent setBarData={setBarData}
                        barData={barData}
                        barIndices={barIndices}/>
      </div>
    </div>
  );
}


export default SortingContainer;