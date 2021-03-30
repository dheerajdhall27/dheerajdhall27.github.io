import React from 'react';

const OrderingComponent = (props) => {

    function updateOrderingType(e) {
        props.setOrderByAscending(e.target.value);
    }

    return(
        <div>
            <div>
                <label className="font-weight-bold text-white">ORDERING</label>
            </div>
            
            <div>
                <select className="ordering-select" onChange={updateOrderingType} disabled={props.algoRunning}>
                    {   
                        props.orderData.map((d, index) => {
                            return <option value={d} key={index}>{d}</option>;
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default OrderingComponent;