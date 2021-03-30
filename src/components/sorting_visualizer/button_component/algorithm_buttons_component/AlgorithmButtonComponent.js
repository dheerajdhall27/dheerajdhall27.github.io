import React from 'react';

const AlgorithmButtonComponent = (props) => {

    function updateAlgorithmType(e) {
        props.setAlgorithmType(e.target.value);
    }

    return(
        <div>
            <div>
            <label className="algorithm">ALGORITHM</label>
            </div>
            <div>
                <select className="algorithm-select" onChange={updateAlgorithmType} disabled={props.algoRunning}>
                    {   
                        props.algorithmData.map((d, index) => {                            
                            return <option value={d} key={index}>{d.replace(/_/, ' ')}</option>;
                        })      
                    }
                </select>
            </div>
        </div>
    )
}

export default AlgorithmButtonComponent;