
import Students from "./content/Students";
import { Footer } from "./footer/Footer";
import { Header } from "./Header/Header";
import Login from "./Login/Login";


export function App({abc,age}) {
  
  return (
    <>
      <Header xyz={abc} age={age}/>
      <Students/>
      <Login/>

      <Footer/>
     
    </>
  );
}


