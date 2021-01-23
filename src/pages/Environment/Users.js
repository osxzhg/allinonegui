import React, {Component} from 'react';
import User from './User'

class Users extends Component {
    handleSubmitClick = () => {
        const value = this._name.value;
        const name = this._name.name;
        // do something with `name`
        console.log("Users component: " + name + value);
      }
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User age={10}>John</User>
                <User>Jill</User>
                <User>Peter</User>
                <input name="teacher" type="text" ref={input => this._name = input} />
                <button onClick={this.handleSubmitClick}>Sign up</button>
            </div>
        )
    }
}

export default Users;