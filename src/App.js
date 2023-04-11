import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = new useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("app");
  //UseCallback is used to store function across the components re-evaluations.
  //And also we don't have to provide showParagraph as a dependency to dependencies array because useCallback ensures that it will be same function object.
  const toggleParagraphHandler = useCallback(() => {
    allowToggle && setShowParagraph((prevState) => !prevState);
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle((prevState) => !prevState);
    showParagraph && setShowParagraph((prevState) => !prevState)
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler} content="hello">
        Click
      </Button>
      <Button
        onClick={allowToggleHandler}
        content={allowToggle ? "Off" : "On"}
      />
    </div>
  );
}

export default App;
