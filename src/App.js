import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Login from './components/login';
import CafeList from './components/cafelist';
import DetalleCafe from './components/detalleCafe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <React.StrictMode>
      <Router>      
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/cafes" element={<CafeList></CafeList>} />
          <Route path="/cafe/:id" element={<DetalleCafe />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
