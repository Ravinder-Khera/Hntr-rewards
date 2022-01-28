import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import { MoralisProvider } from "react-moralis";

const APP_ID = "AciytsfTneYeGa0T50DCtZx8RcKI7jiq7aWbxGgy";
const SERVER_URL = "https://bxajbu1wkkqt.usemoralis.com:2053/server";


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
  
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
