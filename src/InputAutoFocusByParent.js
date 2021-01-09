import React from 'react';
import CustomTextInput from './CustomTextInput';
class InputAutoFocusByParent extends React.Component {
  
  constructor(props){
    super(props);
    this.state={count:0};
  }
    componentDidMount() {
      this.textInput.focusTextInput();
    }

    handleChange=()=>{
      this.setState((state) => {
        return {counter: state.counter+1};
      });
    }
  
    render() {
      return (
        <div>
        <button onClick={this.handleChange}>button</button>
        <CustomTextInput ref={(e)=>this.textInput=e} />
        </div>
      );
    }
  }
  export default InputAutoFocusByParent;