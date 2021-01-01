import React, {Component} from 'react';
import CustomTextInput from './CustomTextInput';
class InputAutoFocusByParent extends React.Component {
    constructor(props) {
      super(props);
    //   this.textInput = React.createRef();
    }
  
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