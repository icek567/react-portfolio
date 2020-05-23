import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <Router>
      < Header/>
      <Jumbotron/>
      <Container />
      <Footer />
    </Router>
  );
}

export default App;
