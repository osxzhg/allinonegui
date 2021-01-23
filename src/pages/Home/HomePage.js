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
        <button onClick={()=> setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        </div>
      </div>
    </>
  );
}
