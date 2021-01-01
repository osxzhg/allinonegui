import {useMyContext} from './ContextWrapper';
import { useEffect} from 'react';
const BlogFunction=(props)=>{


const {state,dispatch} = useMyContext();
useEffect(() => {
    dispatch({type: "outlook"});
}, [])
const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
      <h2>email address</h2>
      <p>{state.address}</p>
    </div>
  );
}
export default BlogFunction;