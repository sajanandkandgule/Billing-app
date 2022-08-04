import React  from 'react'
import { useHistory } from 'react-router-dom'
import Billing from './Billing'


const BillContainer = (props) => {
    const history = useHistory()

    const handleViewAll = () =>{
      history.push("/bills/all")
    }
    
   

  return (
    <div>
      <div>
        <h2> Billing details</h2>
      <button onClick ={handleViewAll}>ViewAll Bills</button>
      </div>

      <Billing/>
    </div>
  )
}

export default BillContainer