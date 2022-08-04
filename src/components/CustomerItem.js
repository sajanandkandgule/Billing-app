import React,{useState} from "react";
import {useDispatch} from "react-redux"
import { startRemoveItem } from "../Action/customerAction";
import EditCustomer from "./EditCustomer";

const CustomerItem =(props)=>{

    const [isTrue , setIsTrue] = useState(false)


    const {_id , name , mobile , email}  =props

    const handleToggle = () =>{
        setIsTrue(!isTrue)
    }

    const dispatch = useDispatch()

    const handleRemove = () =>{
        const confirm = window.confirm("are you sure ?")
        if(confirm){
            dispatch(startRemoveItem(_id))
        }
        
    }

    return(
        <div className="col-sm-4">
          {
            isTrue ?(
                <div>
                    <EditCustomer
                    _id ={_id} 
                    name = {name}
                    email = {email}
                    mobile = {mobile}
                    handleToggle = {handleToggle}
                    
                    />
                    
                    <button onClick = {handleToggle}>cancel</button>
                    

                </div>
            ) :(
                <div>
                    <div className="shadow-sm" >                       
                           <h3>{name} </h3> 
                           <h6> {email} </h6>
                           <h6> {mobile} </h6>
                            <p> <button onClick = {() =>{
                                handleRemove(_id)
                            }}> Remove</button></p>
                           <p><button onClick={handleToggle}>Edit</button></p> 
                           
                            </div>    
                   
                </div>
                
            )    
          }
        </div>

    )
}
export default CustomerItem


        /* <h5> name - {name}</h5>
            <h5> mobile - {mobile}</h5>
            <h5>Email - {email}</h5>
            <button onClick = {() =>{
                handleRemove(_id)
            }}> x</button>
            <button onClick = {handleToggle}>Edit</button>

                </div>
            ) */