import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const Generator = (props) => {
   
    const params = useParams()
    const history = useHistory()

    console.log("params", params)
    
    const bill = useSelector((state)=>{
        console.log("state.bills",state.bills)
        return state.bills.filter(bil => bil._id === params.billId)[0]
    })
    console.log("bill", params.billId)

        const customer  = useSelector((state)=>{
        return state.customer.filter(cus => cus._id === bill.customer)[0]
    })
     console.log(customer)
    const products = useSelector((state)=>{
        return state.product
    })

    const billProducts = bill?.lineItems.map(item =>{
        const result =  products.filter(prod => prod._id === item.product)[0]
        result.quantity = item.quantity
        result.subTotal = item.subTotal
        return result
    })

    const handleBack = () =>{
        history.push("/billing")
    }
    return (
      
        <div style={{border:"1px solid black", backgroundColor:"white"}}>
            <div   >
           <h2>{customer.name}</h2>
           <ul>
            { 
            billProducts.map((prod,index)=>{
                return (
                    <div key={index} >
                    
                        <p >Product - {prod.name}- {prod.subTotal}</p>

                        </div>
                )
            })
            
            }
           </ul>
           <p>Total - {bill.total}</p>
</div>
            <div>
            <button onClick = {handleBack}>Back</button>
            </div>
        </div>


    )
}
export default Generator

