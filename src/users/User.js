import React from 'react';
import Users from './Users';

const User = (props) => {
    let output= props.age ? props.age + props.children : props.children;
    return ( <div>{output}</div>)
}

export default User;