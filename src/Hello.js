import React, { useEffect,useState } from 'react';

export const Hello = () => {

  const [name,Setname]  = useState(0);
  useEffect(() => {
    // console.log("render");
    return () => {
      console.log("unmount");
    }
  }, [name]);

  return (
      <div>
    hello
    <button onClick={()=>Setname(name+1)}>{name}</button>
  </div>
  );

  }
export default Hello;