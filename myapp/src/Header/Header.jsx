import { useContext } from 'react';
import './Header.css'
import { userContext } from '../context/Context';
export function Header({xyz}){
let a=10;
let b=20;
// let name="akshat"

const {name,age}=useContext(userContext);
console.log(name)
console.log()
return(
    //react fragment
    <>
    <div className="navbar">
        <div>Logo</div>
        <div>navigation buttons {name} {age}</div>
        <div>search bar </div>
    </div>
     

    </> 

  
)

}