import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { startGetProduct } from "../Action/productAction";


const ProductList =(props) =>{

    const dispatch = useDispatch()


    // useEffect(() =>{
    //     dispatch(startGetProduct())

    // },[dispatch])

    const product = useSelector((state) =>{
        return state.product
    
    })

    

    return(
        <div>

            
            <h3>ProductList - {product.length}</h3>
            {
                product.length === 0 ? (
                    <div>
                        <p> No Product Found Add Your First Product </p>
                    </div>
                ) :(
                    <div className="row" style={{maxHeight :"500px" , overflow :"auto" ,padding:"20px 10px" , boxShadow :"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                        {
                            product.map((ele, i) =>{
                                return <ProductItem key ={i} {...ele}/>
                            })
                        }
                    </div>
                )
            }

        </div>
    )
}
export default ProductList