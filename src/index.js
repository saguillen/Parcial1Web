import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./localizacion/es";
import localeEnMessages from "./localizacion/en";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={navigator.language} messages= {navigator.language.startsWith("es")?localeEsMessages:localeEnMessages}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
