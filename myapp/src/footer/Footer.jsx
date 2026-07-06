import { useContext } from "react"
import { userContext } from "../App"



export  function Footer() {

  let {dispatch}=useContext(userContext)
  return (
    <div><button onClick={()=>{dispatch({type:"increment"})}}>+</button></div>
  )
}
