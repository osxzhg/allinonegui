import logo from './logo.svg';
import './App.css';
import { GetTemperature } from './GetTemperature';
import { Button } from 'antd';

function App() {
  let output=process.env.NODE_ENV;
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
          {output}
        </a>
        <GetTemperature />
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
