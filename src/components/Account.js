import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetUser } from "../Action/userAction";


const Account = (props) =>{

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(startGetUser())

    },[dispatch])

    const user = useSelector((state) =>{
        return state.user
    })
  


 
    return(
        <div className="text-center p-5" >
         <h2> User Information</h2>
         <p> UserName - {user.username}</p>
         <p>Email - {user.email}</p>
        </div>
    )
}
export default Account