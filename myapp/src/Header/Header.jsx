import './Header.css'
export function Header({xyz,age}){
let a=10;
let b=20;
let name="akshat"
console.log()
return(
    //react fragment
    <>
    <div className="navbar">
        <div>Logo</div>
        <div>navigation buttons {xyz}{age}</div>
        <div>search bar</div>
    </div>
     

    </> 

  
)

}