import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { startGetCustomerData } from "../Action/customerAction";
import CustomerItem from "./CustomerItem";

const CustomerList = (props) =>{

    const dispatch = useDispatch()

    // useEffect(() =>{
    //     dispatch(startGetCustomerData())
    // },[dispatch])

    const customer = useSelector((state) =>{
        return state.customer
    })

    return(
        <div>
            <h3>CustomerList - {customer.length}</h3>
            {
                (customer.length === 0 ) ?(
                    <div>
                        <p>No customer found add your first customer</p>
                    </div>
                ) :(
                    <div className="row" style={{maxHeight :"500px" , overflow :"auto" ,padding:"20px 10px" , boxShadow :"rgba(0, 0, 0, 0.1) 0px 4px 12px"}} >
                    {
                        customer.map((ele,i) =>{
                            console.log(ele)
                            return <CustomerItem key ={i} {...ele}/>
                        })
                    }


                     </div>
                )
            }

        </div>
    )
}
export default CustomerList