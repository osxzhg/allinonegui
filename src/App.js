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


function App() {
  const [count,setCount] = useState(0);
  const [showHello, setShowHello] = useState(true);
  const [values,handleChange] = useForm({
    email: "",
    firstName: ""
  });

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
  let output=process.env.NODE_ENV;
  let language = navigator.language;
  let winlanguage = window.navigator.language;
  let answer = "ans";
  moment.locale('zh-cn');
  return (
    
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
					<input name="email" value={values.email} onKeyPress={handleAnswerChange} onChange={handleChange}/>
				<small> Press Y for Yes or N for No</small>
    </div>
  );
}

export default App;
