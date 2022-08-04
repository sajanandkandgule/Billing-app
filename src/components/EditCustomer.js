import React from 'react'
import Customers from './Customers'

const EditCustomer = (props) => {

    const {name , _id , email , mobile , handleToggle} = props


  return (
    <div>
       <Customers name ={name} 
       email = {email} _id ={_id} 
       mobile = {mobile}
        handleToggle ={handleToggle}/>
        
    </div>


  )
}

export default EditCustomer