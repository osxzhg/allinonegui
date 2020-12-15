import logo from './logo.svg';
import './App.css';
import { GetTemperature } from './GetTemperature';
import { Button } from 'antd';
import { FormattedMessage } from "react-intl";
import moment from "moment";
//import 'moment/locale/zh-cn';
import 'moment/locale/en-gb'
import 'moment/locale/fr';


function App() {
  let output=process.env.NODE_ENV;
  let language = navigator.language;
  let winlanguage = window.navigator.language;
  moment.locale('zh-cn');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
      </header>
    </div>
  );
}

export default App;
