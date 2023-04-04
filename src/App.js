import React, { useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {

  const [showParagraph, setShowParagraph] = new useState(false);
  console.log("app");
  function toggleParagraphHandler(){
    setShowParagraph((previousState) =>!previousState);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show = {false}/>
      <Button onClick = {toggleParagraphHandler} content = "hello" >Click</Button>
    </div>
  );
}

export default App;
