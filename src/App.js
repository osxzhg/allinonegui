import logo from './logo.svg';
import './App.css';
import { GetTemperature } from './GetTemperature';
import { Button } from 'antd';
import { FormattedMessage } from "react-intl";
import moment from "moment";
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb'
import 'moment/locale/fr';
import { useState} from "react";
import { useHotkeys} from "react-hotkeys-hook";
import Users from "./users/Users";
import Hello from "./Hello";
import { useForm } from './useForm';
import { Input } from 'antd';
import ProfilePage from './ProfilePage';
import CustomTextInput from './CustomTextInput';
import TextInputFunction from './TextInputFunction';
import ControlledInputFunction from './ControlledInputFunction';
import InputAutoFocusFunction from './InputAutoFocusFunction';
import InputAutoFocusByParent from './InputAutoFocusByParent';
import BlogFunction from './BlogFunction';
import ContextProvider from './ContextWrapper';


function App() {
  const [count,setCount] = useState(0);
  const [showHello, setShowHello] = useState(true);
  const [profileValues,handleChange] = useForm({
    email: "",
    firstName: ""
  });
  const [lastName,setLastName]=useState("");
  const [items, setItems] = useState(["foo","bar","baz"]);

  useHotkeys('alt+1',()=>setCount(prevCount=>prevCount+1));
  useHotkeys('alt+2',()=>setCount(prevCount=>prevCount-1));
  useHotkeys('alt+3',()=>{navigator.clipboard.writeText("alt3")});

  const handleAnswerChange=event=>{
		if(event.key === 'y'){
			alert('The sky is your starting point!')
	}
		else if (event.key === 'n') {
			alert('The sky is your limit👀')
	}
};
const element = 
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
;

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

  let output=process.env.NODE_ENV;
  let language = navigator.language;
  let winlanguage = window.navigator.language;
  let answer = "ans";
  moment.locale('zh-cn');
  return (
   <ContextProvider>
 <div className="App">
      <button onClick={()=> setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
        <Users title= "Users List"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {output}:{language}:{winlanguage}:{moment(1316116057189).fromNow()}
          <br/>
          <FormattedMessage
                    id="app.title.original"
                  />

        </a>
        <GetTemperature />
        <Button type="primary">Button</Button>
        Presssed {count} times.
        <p> Are You Smart?</p>
					<input name="email" value={profileValues.email} onKeyPress={handleAnswerChange} onChange={handleChange}/>
          <Input name="firstName" placeholder="First Name" value={profileValues.firstName} onChange={handleChange} />
          <Input name="lastName" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />

				<small> Press Y for Yes or N for No</small>
        <ProfilePage user='Nick'></ProfilePage>

        { items.map((item,index) => {
        	return <h1 key={index}> {item} </h1>;
         })}

         <h1> ref</h1>
         {/* <CustomTextInput></CustomTextInput> */}
         <TextInputFunction></TextInputFunction>
         <ControlledInputFunction></ControlledInputFunction>
         <h1>Make input autofocus by parent component</h1>
         <InputAutoFocusByParent></InputAutoFocusByParent>
         <h1>Input AutoFocus when the component is mounted</h1>
         <InputAutoFocusFunction />
         <h1>Map an arrary to list</h1>
         <BlogFunction posts={posts} />

    </div>
   </ContextProvider> 
   
  );
}

export default App;
