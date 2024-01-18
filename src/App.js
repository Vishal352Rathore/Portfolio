import logo from './logo.svg';
import Home from './components/home/home';
import AnimatedRoute from './components/animatedRoute';
import Navbarnav from './components/navbar/navbarnav';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App app-body">
    <Navbarnav name='Khushal'/>
     <AnimatedRoute/>
    </div>
  );
}

export default App;
