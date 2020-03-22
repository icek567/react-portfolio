import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"

function App() {
  return (
    <Router>
      <Header />
      <Container />
      <Footer />
    </Router>
  );
}

export default App;
