import React from 'react'
import './index.css';


export const MainContainer = props =>{
    const { precio, tamaño, estado} = props;
    return <div className="cardcontainer">
        <div className="cardElements">
        <h2> Image  </h2>
        </div>
        <div className="cardElements">
        <h2>{precio}</h2>
        </div>
        <div className="cardElements">
        <h2>{tamaño}</h2>
        </div>
        <div className="cardElements">
        <h2>{estado}</h2>
        </div>
    </div>
}
