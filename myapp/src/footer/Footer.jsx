import { useContext } from "react"
import { userContext } from "../context/Context"


export  function Footer() {

  let user=useContext(userContext)
  return (
    <div>Footer {user.name}{user.age}</div>
  )
}
