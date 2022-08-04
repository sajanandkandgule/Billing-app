import React from "react";
import {useFormik} from "formik"
import * as Yup from "yup"
import axios from "axios"

const  registerSchema = Yup.object().shape({
    username: Yup.string()
    .min(4)
    .max(64) 
    .required(" Required!"),

    email: Yup.string()
    .email()
    .required("Required!"),

    password:Yup.string()
    .min(8)
    .max(128)
    .required("Required!"),

    businessName:Yup.string()
    .min(10)
    .max(100)
    .required("Required!"),

    address:Yup.string()
    .min(10)
    .max(120)
    .required("Required!")

})


const Registers =(props) =>{

  const formik = useFormik({
    initialValues :{
        username :"",
        email :"",
        password :"",
        businessName :"",
        address :""
    },
    onSubmit :(FormData , {resetForm}) =>{
        console.log(FormData)
        axios.post(" http://dct-pos-app.herokuapp.com/api/users/register" , FormData)
     .then((response) =>{
        // console.log( "reg" , FormData)
        const result = response.data
        if(result.hasOwnProperty("errors")){
            alert(result.message)
        } else {
            alert("User Registered successfully")
            props.history.push("/login")
        }
     })
     .catch((errors)=>{
        console.log(errors.message)
     })

        resetForm()
    },
    
    validationSchema: registerSchema ,
    validateOnChange:false 
    
    
  })

 

    return(
<div className="row margin-top: 20px;">
    <div className="col-md-4">
    </div>
    <div className="col-md-4 center">
            <h2>Register With Us</h2>
            <form onSubmit = {formik.handleSubmit} className="row g-3">

                <label >UserName</label><br/>
                <input type = "text" value ={formik.values.username} placeholder = "Enter your Name"
                  name = "username" onChange = {formik.handleChange}/>
                  {formik.errors.username}
                  <br/>
                  
                  <label>Email</label><br/>
                  <input type = "text" value = {formik.values.email} name = "email" placeholder="Enter Your Email"
                   onChange = {formik.handleChange}/>
                   {formik.errors.email}
                   <br/>

                        <label>Password</label><br/>
                  <input type = "password" value = {formik.values.password} name = "password" placeholder="Enter Your password"
                   onChange = {formik.handleChange}/>
                   {formik.errors.password}
                   <br/>

                            <label>BusinessName</label><br/>
                  <input type = "text" value = {formik.values.businessName} name = "businessName"
                   placeholder="Enter Your businessName"
                   onChange = {formik.handleChange}/>
                   {formik.errors.businessName}
                   <br/>

                            <label>Address</label><br/>
                  <input type = "text" value = {formik.values.address} name = "address" placeholder="Enter Your address"
                   onChange = {formik.handleChange}/>
                   {formik.errors.address}
                   <br/>

                  <input  type="submit" className="btn btn-secondary"  value = "Register"/>   

            </form>

        
        </div>
        <div className="col-md-4">  
        </div>
</div>
       
    )
}
export default Registers