import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import  {Navigate} from "react-router-dom";
// import { useHistory } from 'react-router-dom';

import { useParams } from 'react-router-dom';

export default function PrivateRoutes({children}){
    const { id } = useParams<{ username: string }>();
    
    const {verify} =useContext(AuthContext);
    if(!verify && id==''){
       return <Navigate to='http://localhost:5173/signup'/>
 }
return children
}