import React, { useState,useEffect } from 'react';

function detectComponent(WrappedComponent) {
    return function (...props) {
       const [counter, setCounter] = useState(0);
       const [hovered, setHovered] = useState(false);
   
       props['counter'] = counter;
       props['setCounter'] = setCounter;
       return (
       <div
         onMouseOver={()=>setHovered(true)}
         onMouseLeave={()=>setHovered(false)}
         >
       <WrappedComponent hovered={hovered} {...props} />
         </div>)
    }
 }

const DetectHover=(props) =>{
    const style = {
        backgroundColor: props.hovered ? "blue" : ""
    }
    return (
        <div style={style}>
            <h1>Hello CodeSandbox</h1>
        </div>
    )
}
const HoverComponent = detectComponent(DetectHover);
export default HoverComponent;
