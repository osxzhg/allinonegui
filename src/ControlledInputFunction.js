import {useState} from 'react';
const ControlledInputFunction = (props) => {
    const [input,setInput] = useState('');
    const handleClick = (e) => {
         setInput(e.target.value) ;
    }
    return (
        <div>
            <input type='text' value={input} onChange={handleClick}></input>
        </div>
    )
}

export default ControlledInputFunction;