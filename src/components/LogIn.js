import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios";

const registerSchema = Yup.object().shape({
    email:Yup.string()
    .email()
    .required("Required!"),
    
    password:Yup.string()
    .min(8)
    .max(128)
    .required("Required!"),
})

const LogIn = (props) =>{
 
    const formik  = useFormik({
        initialValues :{
            email:"",
            password:""

        },
        onSubmit:(formData , {resetForm}) =>{
            console.log(formData)
           axios.post(" http://dct-pos-app.herokuapp.com/api/users/login" , formData)
           .then((response) =>{
            console.log("login",formData)
            const result = response.data
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            } else{
                console.log("successfully Login")
                localStorage.setItem("token" , result.token)
                props.history.push("/")
                props.handleAuth()
            }
           })

            resetForm()
            
            
        },

        validationSchema:registerSchema,
        validateOnChange:false
    })
    return(
        <div className="row" style={{marginTop: "20px"}} >   
        <div className="col-md-4">
          </div> 
        <div className="col-md-4 center">

            <h3>Login With Us</h3>

            <form onSubmit = {formik.handleSubmit}  className="row g-3">
                
                <label > Email</label><br/>

                <input type ="text" className="form-control" id="floatingInput"  value = {formik.values.email} name= "email"
                placeholder="Enter your Email" onChange={formik.handleChange}/>
                 
                 {formik.errors.email}
                 <br/>
                 
               
                 <label>Password</label><br/>
                 <input type = "password" className="form-control" id="floatingInput"  name = "password" value = {formik.values.password}
                  placeholder ="Enter your password" onChange = {formik.handleChange}/>
                  {formik.errors.password}
                  <br/>
                 
                 
                  <input type = "submit" value = "LogIn"/>

            </form>
           
            </div>
            <div className="col-md-4">  
            </div>
             

            </div>

        
    )
}
export default LogIn

