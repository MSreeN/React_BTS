import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log("button");
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
      {props.content}
    </button>
  );
};
//React.memo doesn't work on this because this component is getting function reference as a prop, whenever the app component re-evaluated a new onclick function gets created and when react compares previous function reference with current function reference it identifies that props has changed and re-evaluates this button component.
//for this we need to use useCallback hook.
export default React.memo(Button);  
