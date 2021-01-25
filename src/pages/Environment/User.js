import React from 'react';
// function component with props
const User = (props) => {
    let output= props.age ? props.age + props.children : props.children;
    return ( <div>{output}</div>)
}

export default User;