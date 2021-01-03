import React, { useState } from 'react';

const DetectHover=(props)=> {
       const [hovered, setHovered] = useState(false);
   
       return (
       <div
         onMouseOver={()=>setHovered(true)}
         onMouseLeave={()=>setHovered(false)}
        >
            {props.render(hovered)}
        </div>)
 }

function cat(isHovered){
    const style = {
        background: isHovered ? "red":""
    };
    return(
      <div style={style}>
         <h1>Hello CodeSandbox</h1>
      </div>);
 }  
 
const App=(props)=>
{
  return <DetectHover render={cat} />;
 }



 export default App;
