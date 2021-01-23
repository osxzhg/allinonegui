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
     <AuthWrapper>
       <Router>
         <HomePage path="/" exact />
         <ProdOrDev path="/env" />
       </Router>
    </AuthWrapper>
   </ContextProvider> 
   
  );
}

export default App;
