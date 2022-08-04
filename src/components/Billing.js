import React , {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { startPostBill } from '../Action/billAction'
import { useHistory } from 'react-router-dom'


const Billing = (props) => {

 

   
     const [formFields , setFormFields] = useState([
         { product : '' ,   quantity : ''}
     ])
     
    const cusId = useSelector((state)=>{
        return    state.customer
         
   })

    const prodId = useSelector((state)=>{
         return   state.product
    })

    const dispatch = useDispatch()

    const history = useHistory()

    const redirect = (billId) =>{
      history.push(`/bill/${billId}`)
    }


   const formik = useFormik({
        initialValues : {
             date : '',
             customer : ''
             
        },
        onSubmit : (formData , {resetForm})=>{
             // console.log({...formData,LineItems:formFields})
            
             dispatch(startPostBill({...formData,lineItems:formFields},redirect))
            //  localStorage.setItem('id' , formData.customer)
            
        }
     })
     const handleFormChange=(event , index)=>{
            event.preventDefault()
          let data = [...formFields]
          data[index][event.target.name] = event.target.value 
           setFormFields(data)
       }

        const addFields=()=>{
              let object = {
                 product : '',
                  quantity : ''
              }
            setFormFields([...formFields,object])
        }
       // console.log(formFields)

        const removeItems=(index)=>{
           let data=[...formFields]
           data.splice(index,1)
           setFormFields(data)
        }

       
       
return (
  <div  className='form-floating row' >
      
      <form  onSubmit={formik.handleSubmit}  >
        <label>Date</label> <br/> &nbsp;  
        <input type='date' value={formik.values.date} name='date' onChange={formik.handleChange} /> <br/> &nbsp;  

        <label>Customer</label> <br/> &nbsp;  
       <select  onChange={formik.handleChange} name='customer' id='customer'>

        <option >Select Customer Name</option> &nbsp;  
            
          {cusId.map((ele, i)=>{
              return <option  value={ele._id} key={i}>{ele.name}</option>
          })}
       </select><br/>
         
         <div>
           {/* Dynamic form input  */}

           {formFields.map((form,index)=>{
              return (
                <div key={index}>
                <select   name='product'  onChange={event=> handleFormChange(event , index)}>
                    <option value=''>Select Products</option>
                   {prodId.map((ele ,i)=>{
                    //  console.log(ele._id)
                     return <option key={i} value={ele._id}> {ele.name} </option>
                   })}
                </select> &nbsp;  
   
                <input name='quantity' placeholder='quantity'
                onChange={event=> handleFormChange(event , index)} value={form.quantity}/>  &nbsp;  

                {formFields.length > 1 &&  < button type='button'onClick={()=>{removeItems(index)}}>Delete</button>} &nbsp;  
               </div>
               
             )
             })}
             
            <button type='button' onClick={addFields} >addMORE</button> &nbsp;  

         </div>
             <input type='submit'  value='GenerateBill' /> &nbsp;  
        
       </form>
        <hr/>  
  </div>
)
}


export default Billing

