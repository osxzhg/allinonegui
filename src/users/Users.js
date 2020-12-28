import React, {Component} from 'react';
import User from './User'

class Users extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User age={10}>John</User>
                <User>Jill</User>
                <User>Peter</User>
            </div>
        )
    }
}

export default Users;