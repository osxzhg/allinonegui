import React from "react";
import { useState} from "react";
import Users from "./Users"

export default function HomePage() {
  let nodeEnv=process.env.NODE_ENV;
  let language = navigator.language;
  return (
    <>
      <div id="home">
        <div className="container">
          <p>Env</p>
          this is the {nodeEnv} system.
          <br />
          the language of browser is {language}
          <br />
          <p>**************************************</p>
        <Users title= "Users List"/>
        </div>
      </div>
    </>
  );
}