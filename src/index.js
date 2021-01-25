import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import moment from "moment";
import 'moment/locale/en-gb';
import 'moment/locale/zh-cn';
import 'moment/locale/fr';
import { IntlProvider } from "react-intl";
import message_en from "./i18n/transactions/en.json";
import message_cn from "./i18n/transactions/cn.json";

moment.locale(navigator.language);

const messages = {
  "en": message_en,
  "zh": message_cn,
};


const language = navigator.language.split(/[-_]/)[0];


ReactDOM.render(
  <IntlProvider
    locale={language}
    defaultLocale="en"
    messages={messages[language]}>    
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Hello toWhat='World'></Hello>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
