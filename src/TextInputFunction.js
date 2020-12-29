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
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );
  }
export default TextInputFunction;
