import React from 'react'
import Customers from './Customers'
import CustomerList from './CustomerList'

const CustomerContainer = (props) => {
  return (
    <div className='row'  style = {{boxShadow :"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
        <div className='col-sm-5'>
            <Customers/>
        </div>
        <div className='col-sm-7'>
          <div className='row'>
          <CustomerList/>
          </div>
            
        </div>
    </div>
  )
}

export default CustomerContainer