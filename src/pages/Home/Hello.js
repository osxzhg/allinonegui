import React, { useEffect,useState } from 'react';

export const Hello = () => {

  const [count,CountInc]  = useState(0);

  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    }
  }, [count]);

  return (
      <div>
    {/* <button onClick={()=>Setname(preState=>preState+1)}>{name}</button> */}
    {<button onClick={()=>CountInc(preState=>preState+1)}>{count}</button> }
  </div>
  );

  }
export default Hello;