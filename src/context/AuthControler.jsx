import { createContext, useState } from "react"


export const userContext=createContext('')


const AuthControler = (prop) => { //yahan jo prop pass horahe woh woh poori application kyu k we have wrap whole app in this component in _app.js

  const [user,setUser]=useState({name:'shobii',loggedIn:"false"})

  const update=()=>{
    setUser((prev)=>({...prev, loggedIn:"true"}))
  } 

    return (
      //yahan prop.children means k us App k ander sare components
      //jo value ki ander pass hoga wohi baad me accessible hoga
       <userContext.Provider value={{user,update}}>
          {prop.children}   
       </userContext.Provider>
      )
}

export default AuthControler