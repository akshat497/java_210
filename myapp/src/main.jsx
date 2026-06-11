
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import "./index.css"

let name="akshat"
let age=25
createRoot(document.getElementById('root')).render(

    <App abc={name} age={age}/>
 
)
