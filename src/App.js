import logo from './logo.svg';
import './App.css';
import { GetTemperature } from './GetTemperature';
import { Button } from 'antd';
import { FormattedMessage } from "react-intl";
import moment from "moment";
import { useState} from "react";
import { useHotkeys} from "react-hotkeys-hook";
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
import MyEnhancedWrappedComponent from './HOCForFunctionComponent'
import RenderProps from './RenderProps';
import LocalStorage from './LocalStorage';
import AuthWrapper from "./AuthWrapper";
import Cookies from "js-cookie"
import HomePage from "./pages/Home/HomePage";
import { Router } from "@reach/router";
import ProdOrDev from "./pages/Environment/ProdOrDev";
import Moment from "./pages/Moment/Moment";


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

  return (
   <ContextProvider>
     <AuthWrapper>
       <Router>
         <HomePage path="/" exact />
         <ProdOrDev path="/env" />
         <Moment path="/moment" />
         <GetTemperature path="/gettemperature"/>
         <ProfilePage path="/profile"/>
       </Router>
    </AuthWrapper>
   </ContextProvider> 
   
  );
}

export default App;
