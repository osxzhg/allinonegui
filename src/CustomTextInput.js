import React from 'react';
class CustomTextInput extends React.Component {
  focusTextInput = ()=> {
    this.textInput.focus();
  }

  
    render() {

      return (
        <div>
          <input
            type="text"
            ref={(value)=>this.textInput=value}
          />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }

  export default CustomTextInput;