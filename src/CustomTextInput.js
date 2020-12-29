import React from 'react';
class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);

      this.focusTextInput = () => {
        if (this.textInput) this.textInput.focus();
      };
    }
  
    componentDidMount() {
      this.focusTextInput();
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