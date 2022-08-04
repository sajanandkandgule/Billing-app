
import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { startPostProduct } from "../Action/productAction";
import { startEditProduct } from "../Action/productAction";

const Products = (props) =>{

    const {handleToggle , _id  , name : title , price : amu } =props


    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues :{
            name : title ? title : "",
            price : amu ? amu : ""
        },
        onSubmit :(FormData , {resetForm}) =>{
            console.log("products" , FormData)
            if(title) {
                dispatch(startEditProduct(FormData,_id))
                 handleToggle()
            } else {
                dispatch(startPostProduct(FormData))
                resetForm()
            }
            
           
        }

        
    })


    return (
        <div>
            <h2> Add Product</h2>
            <form onSubmit = {formik.handleSubmit}>
                <label>Name</label><br/>
                <input type ="text" value ={formik.values.name} name = "name"
                placeholder="Enter Product Name" onChange={formik.handleChange}/><br/>

                <label>Price</label><br/>
                <input type = "number" value={formik.values.price} name = "price"
                placeholder="Enter Product Price" onChange={formik.handleChange} /><br/> 
              <span>  </span>
                <input type ="submit" value= "Add Product"/>
                


            </form>
          

        </div>
    )

}
export default Products