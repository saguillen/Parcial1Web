import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Login from './components/login';
import CafeList from './components/cafelist';
import DetalleCafe from './components/detalleCafe';
function App() {
  return (

    <React.StrictMode>
    <Login></Login>
    <CafeList></CafeList>
    <DetalleCafe></DetalleCafe>
  </React.StrictMode>
  );
}

export default App;
