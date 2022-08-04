import axios from "axios"

export const startPostCustomersData = (FormData) =>{
    return(dispatch) =>{
        axios.post("http://dct-pos-app.herokuapp.com/api/customers" ,FormData ,{
            headers :{
                "Authorization" : `Bearer ` +localStorage.getItem("token")
            }
        })
        .then((res)=>{
            console.log(res)
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.massage)
            } else {
                dispatch(addCustomer(result))
            }
          
        })
        .catch((err) =>{
            alert(err.message)
        })
    }
}



export const  addCustomer = (FormData) =>{
    return {
        type:"ADD_CUSTOMER",
        payload:FormData

    }
}

export const startGetCustomerData = () =>{
    return(dispatch) =>{
        axios.get("http://dct-pos-app.herokuapp.com/api/customers" , {
            headers :{
                 "Authorization" : `Bearer `  + localStorage.getItem("token")
            }
        })
        .then((res) =>{
        
            const result = res.data
             console.log(result)
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            }else {
                dispatch(getCusData(result))
            }
        })
        .catch((err) =>{
            alert(err.message)
        })
    }
}
export const getCusData = (data) =>{
    return {
        type : "GET_CUS",
        payload :  data
    }
}

export const startRemoveItem =(_id) =>{
    return(dispatch) =>{
        axios.delete(` http://dct-pos-app.herokuapp.com/api/customers/${_id}` , {
            headers :{
                "Authorization": `Bearer ` + localStorage.getItem("token")
            }
        })
        .then((res) =>{
            const result = res.data
            // console.log( "delete" , res.data)
            if(result.hasOwnProperty("errors")){
                alert(result.errors)
            } else {
                dispatch(removeItem(_id))
            }
        })
    }

}

export const removeItem = (_id) =>{
    return {
        type:"REMOVE_ITEM" ,
        payload:_id
    }
}

export const startEditCum = (FormData , _id) =>{
    return(dispatch) =>{
        axios.put(`http://dct-pos-app.herokuapp.com/api/customers/${_id}` , FormData ,{
            headers :{
                "Authorization" : `Bearer ` + localStorage.getItem("token")
            }
            
        })
        .then((res) =>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            } else {
                dispatch(editItem(result))
            }
        })
        .catch((err) =>{
            alert(err.message)
        })
        
    }

}

export const editItem =(data) =>{
    return{
        type : "EDIT_ITEM",
        payload : data
    }
}