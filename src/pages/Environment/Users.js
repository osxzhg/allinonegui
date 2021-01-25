import React, {Component} from 'react';
import User from './User'

class Users extends Component {
    constructor(props){
        super(props);
        this.state={ display: false};
    }
    handleSubmitClick = () => {
        const value = this._name.value;
        const name = this._name.name;
        // do something with `name`
        this.setState((prepState)=>({display: !prepState.display}));
        console.log("Users component: " + name + value);
      }
    render(){
        const output="dffffffff";
        return (
            <div>
                {/* class component with props */}
                <h1>{this.props.title}</h1>
                <User age={10}>John</User>
                <User>Jill</User>
                <User>Peter</User>
                 {/* uncontrolled tag */}
                <input name="teacher" type="text" ref={input => this._name = input} />
                <button onClick={this.handleSubmitClick}>Sign up</button>
                { this.state.display && <p>name: {this._name.name} value: {this._name.value}</p>}
            </div>
        )
    }
}

export default Users;