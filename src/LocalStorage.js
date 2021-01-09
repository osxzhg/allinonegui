import React, { useState } from "react";
import store from "store-js";
const LocalStorage=(props)=>{

    const MY_ADDRESS = "age";
    const [age,setAge] = useState(store.get(MY_ADDRESS));
    

      return (
        <div>
        <h1>local storage</h1>
          <h1>{age}</h1>
          <input type="text" onChange={(e)=>{
              setAge(e.target.value);
              store.set(MY_ADDRESS,e.target.value)}} />
        </div>
      );
    }
    export default LocalStorage;