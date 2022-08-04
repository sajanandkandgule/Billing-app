import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { startPostCustomersData } from "../Action/customerAction";
import { startEditCum } from "../Action/customerAction";


const Customers = (props) =>{
    const {_id , handleToggle , name : title , mobile : num ,  email: mail} = props 
 
    const dispatch = useDispatch()                  

    const formik = useFormik({
        initialValues :{
            name: title ? title : "",
            mobile: num ? num : "",
            email:mail ? mail : ""

        },
        onSubmit:(FormData , {resetForm}) =>{
            console.log(FormData)
            if(title || num || mail){
                dispatch(startEditCum(FormData , _id )) 
                 handleToggle()
            } else{
                dispatch(startPostCustomersData(FormData))
                resetForm()
            }
          
        }
    })
    return(
        <div className="row margin-top: 20px;">
            <div div className="col-md-4">

            </div>
            <h2> Add Customers</h2>

            <form onSubmit ={formik.handleSubmit}>

                <label for="exampleInputCustomerName" className="form-label"> CustomerName</label><br/>
                <input type = "text" value = {formik.values.name} placeholder ="Enter Customers Name"
                 name = "name" onChange ={formik.handleChange}/><br/>

                 <label for="exampleInputEmail1" className="form-label"> Email</label><br/>
                 <input type= "text" value = {formik.values.email}
                 placeholder ="Enter Customers Emai" name = "email" onChange={formik.handleChange}/><br/>

                 <label for="exampleInputMobil" className="form-label"> Mobil</label><br/>
                 <input type = "number" value = {formik.values.mobile} name = "mobile"
                 placeholder="Enter Customers Mobile Number" onChange= {formik.handleChange}/><br/>

                 <input type = "submit" className="btn btn-secondary" value ="AddCustomer"/> 
            </form>
            

        </div>
    )
}
export default Customers