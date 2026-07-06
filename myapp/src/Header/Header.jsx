import { useContext, useReducer } from "react";
import "./Header.css";
import { userContext } from "../App";

export function Header({ xyz }) {
  let a = 10;
  let b = 20;
  // let name="akshat"

  const { name, age ,state,dispatch} = useContext(userContext);



  return (
    //react fragment
    <>
      <div className="navbar">
        <div>Logo</div>
        <div>
          navigation buttons {name} {age}
        </div>
        <div>search bar </div>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          increment
        </button>
        {state}
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          decrement
        </button>
      </div>
    </>
  );
}
