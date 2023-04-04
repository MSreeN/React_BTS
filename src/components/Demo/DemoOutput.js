import React from "react";

function DemoOutput(props){
  console.log("demo");
  return <p>{props.show? "this is new": ''}</p>
}

//If there is no change in props then react will not re-evaluate this component even if it re-evaluates app which is parent of this
//React will also avoid re-evaluation of child components of this component 
export default React.memo(DemoOutput);