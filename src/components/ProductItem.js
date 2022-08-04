import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { startRemoveProduct } from "../Action/productAction";
import EditProduct from "./EditProduct";



const ProductItem = (props) =>{
    const [logIn , setLogIn] = useState(false)

    const { _id , name , price} = props

    const handleToggle = () =>{
        setLogIn(!logIn)

    }

    const dispatch = useDispatch()

    const handleRemove = (_id) =>{
        const confirm = window.confirm("are you sure??")
        if(confirm){
            dispatch(startRemoveProduct(_id))
        }

    }

    return (
        <div>

            {
                (logIn) ?(
                    <div className="col-sm-4">
                        <EditProduct 
                        _id ={_id}
                        name ={name}
                        price ={price}
                        handleToggle= {handleToggle}
                        />
                        <button  onClick = {handleToggle}>cancel</button>
                    </div>
                ) :(
                    <div className="shadow-sm">
                        <h3> productName - {name} </h3>
                    <h3> ProductPrice - {price}</h3>
                    <button onClick = {() =>{
                        handleRemove(_id)
                    }}>x</button>
                    <button onClick={handleToggle}>Edit</button>


                    </div>
                )
            }

            
        </div>
    )
}
export default ProductItem