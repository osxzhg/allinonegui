import React from "react";
import { useState} from "react";
import Users from "./Users"

export default function HomePage() {
  const [showHello, setShowHello] = useState(true);
  return (
    <>
      <div id="home">
        <div className="container">
        <Users title= "Users List"/>
        </div>
      </div>
    </>
  );
}