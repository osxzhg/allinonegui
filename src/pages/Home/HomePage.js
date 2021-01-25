import React from "react";
import Hello from "./Hello";
import { useState} from "react";
// import "../../App.css";
// import TopBanner from "./TopBanner";
// import CountryFeature from "./CountryFeature";
// import TopCountry from "./TopCountry";
// import Roadmap from "./Roadmap";
// import BuyNow from "./BuyNow";
// import Footer from "../../components/Footer/Footer";
// import "react-toastify/dist/ReactToastify.css";
// import "./HomePage.styles.css";

export default function HomePage() {
  const [showHello, setShowHello] = useState(true);
  return (
    <>
      <div id="home">
        <div className="container">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>reactjs official website</p>
          </a>
        <button onClick={()=> setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        </div>
      </div>
    </>
  );
}
