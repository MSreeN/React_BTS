import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = new useState(false);
  console.log("app");
  //UseCallback is used to store function across the components re-evaluations.
  const toggleParagraphHandler = useCallback(() => setShowParagraph(prevState => !prevState), []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler} content="hello">
        Click
      </Button>
    </div>
  );
}

export default App;
