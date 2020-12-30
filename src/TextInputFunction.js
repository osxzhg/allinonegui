import {useRef} from 'react';
const TextInputFunction=(props)=> {
    // textInput must be declared here so the ref can refer to it
    const textInput = useRef(null);
    
    function handleClick() {
      textInput.current.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={textInput} />
        <button
          onClick={handleClick}
        >
          Focus the text input
          </button>
      </div>
    );
  }
export default TextInputFunction;
