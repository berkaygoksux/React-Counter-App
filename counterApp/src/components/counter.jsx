import React, { useState } from 'react';

function Counter(){

const [count, setCount]= useState(0);


const increase =() =>{

    setCount(count+1);
}
const decrease =() =>{

    setCount(count-1);
}
const reset =()=>{

    setCount(0);
}


const stil={

    fontSize:'1.5em',
    marginBottom:'0.3em',
    color: count % 2 === 0 ? "royalblue" : "crimson",

};

return (

<div className="widget-counter container">
    <h2>Counter</h2>
    <div id="counter" style={stil}>
        Sayı : {count} {count % 2 === 0 ? 'çift sayıdır' : 'tek sayıdır'}
    </div>

    <button button id="increaser" onClick={increase}>
      Increase
    </button>

    <button button id="decreaser" onClick={decrease}>
     Decrease
    </button>

    <button button id="resetCount" onClick={reset}>
     Reset
    </button>


</div>



);



}


export default Counter;
