import React from 'react';
import logo from './logo.svg';
import './App.css';
import HideAppBar from "./components/header/HideAppBar";
import ButtonAppBar from "./components/header/ButtonAppBar";

function App() {
  return (
    <div className="App">
      <HideAppBar></HideAppBar>
      <ButtonAppBar></ButtonAppBar>
    </div>
  );
}

export default App;
