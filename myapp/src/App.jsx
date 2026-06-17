import { useState } from "react";
import Students from "./content/Students";
import { userContext } from "./context/Context";
import { Footer } from "./footer/Footer";
import { Header } from "./Header/Header";
import Login from "./Login/Login";

export function App({ abc }) {
  const [name, setname] = useState("neha")
  const [age, setage] = useState(26)
  return (
    <>
      <userContext.Provider value={{name,age}}>

        <Header xyz={abc}  />
        <Students />
        <Login />

        <Footer />
      </userContext.Provider>
    </>
  );
}
