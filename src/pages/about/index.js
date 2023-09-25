import { userContext } from "@/context/AuthControler"
import { useContext } from "react"



const index = () => {
 
  const userData=useContext(userContext)//yahan useContext k ander woh pass karenge jiska context hume use karna hai
  //isme har woh cheex ajayegi jo value me pas hogi
  
  return (
    <div>
       <h1>{userData.user.name}</h1>
       <h2>{userData.user.loggedIn}</h2>
    <button onClick={userData.update} className="bg-red-900" >click</button>
    </div>
    
  )
}

export default index