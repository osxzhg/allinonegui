import React, { useState } from 'react';
function withCounterState(WrappedComponent) {
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

const WrappedComponent = (props) =>  {
    const {counter, setCounter} = props;

    const style = {
        background: props.hovered ? "red":""
    };
    return(
      <div style={style}>
         <h1>Functional Component Example for Counter</h1>
         <p>We clicked {counter} times</p>
         <button onClick={() => setCounter(counter + 1)}>
            Increase counter
         </button>
      </div>);
 };

 const MyEnhancedWrappedComponent = withCounterState(WrappedComponent);
 export default MyEnhancedWrappedComponent;