import React from 'react';
import logo from './logo.svg';
import './App.css';
import HideAppBar from "./components/header/HideAppBar/HideAppBar";
import ButtonAppBar from "./components/header/ButtonAppBar/ButtonAppBar";
import NestedGrid from "./components/post/Grid/NestedGrid";



function App() {

  return (
    <div className="App">
      <HideAppBar></HideAppBar>
      <ButtonAppBar></ButtonAppBar>
        <br /> <br />
      <NestedGrid></NestedGrid>
    </div>
  );
}

export default App;
