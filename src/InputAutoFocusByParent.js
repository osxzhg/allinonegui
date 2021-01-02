import React from 'react';
import CustomTextInput from './CustomTextInput';
class InputAutoFocusByParent extends React.Component {
  
    componentDidMount() {
      this.textInput.focusTextInput();
    }
  
    render() {
      return (
        <CustomTextInput ref={(e)=>this.textInput=e} />
      );
    }
  }
  export default InputAutoFocusByParent;