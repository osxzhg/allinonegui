import React from 'react';
const User = (props) => {
    let output= props.age ? props.age + props.children : props.children;
    return ( <div>{output}</div>)
}

export default User;