import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  //Q. when every time component re-evaluates how are we still getting previous state.
  //A. React is responsible for managing state. That default value that we pass while creating state is only considered once. React memorizes to which state it belongs. When re-evaluation of a component happens react simply recognizes that it already has state of this component and instead updates that state as needed and it never re-initializes the state unless it is totally gone from dom.
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
