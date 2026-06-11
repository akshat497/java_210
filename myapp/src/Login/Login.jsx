import React, { useEffect, useState } from "react";

function SideBar() {
  useEffect(() => {
    console.log("mounted")
    return() => {
      console.log("unmounted");
    };
  }, []);

  return (
    <>
      <div>sideBar</div>
    </>
  );
}

export default function Login() {
  let [count, setCount] = useState(0);
  let [show, setshow] = useState(true);

  function increment() {
    setCount(count + 5);
    console.log(count);
  }

  function decrement() {
    setCount(count - 5);
    console.log(count);
  }

  useEffect(() => {
    console.log("component is mounted", count);
   
  },[count]);
  return (
    <div>
      <button onClick={decrement}>-</button>

      <p>{count}</p>

      {show ? <SideBar /> : ""}
      <button
        onClick={() => {
          setshow(false);
        }}
      >
        unmount
      </button>

      <button onClick={increment}>+</button>
    </div>
  );
}
