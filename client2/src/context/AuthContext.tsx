
import {createContext,useState} from "react";

export const AuthContext=createContext();
 
export default function AuthContextProvider({children}){
  const [verify,verified]=useState(false);;
const verifing=()=>{
 verified(false);
    
}
const verified_complete=()=>{
  verified(true);
}
  return(
    <AuthContext.Provider value={{verified,verified_complete,verify}}>
        {children}
    </AuthContext.Provider>
  )
}