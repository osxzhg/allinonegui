import logo from './logo.svg';
import './App.css';
import { GetTemperature } from './GetTemperature';

function App() {
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
          Learning React is funny
        </a>
        <GetTemperature />
      </header>
    </div>
  );
}

export default App;
