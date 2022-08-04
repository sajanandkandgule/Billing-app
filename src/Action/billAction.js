import axios from "axios";


export const startPostBill = (formdata , redirect )  =>{
    return(dispatch) =>{
        axios.post("http://dct-pos-app.herokuapp.com/api/bills" , formdata , {
            headers :{
                "Authorization" : `Bearer ` + localStorage.getItem("token")
            }
        })
        .then((res) =>{
            const result = res.data
            console.log(res.data)
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            }else {
                dispatch(addBilling(result))
               redirect(result._id)
    

            }
        })
        .catch((err) =>{
            alert(err.message)
        })
    }
}

export const addBilling =(data) =>{
    return{
        type : "ADD_BILLING",
        payload : data
    }
}

export const startGetBill = () =>{
    return(dispatch) =>{
        axios.get("http://dct-pos-app.herokuapp.com/api/bills" , {
            headers :{
                "Authorization" : `Bearer ` + localStorage.getItem("token")
            }
        })
        .then((res) =>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            } else {
                dispatch(getBill(result))
            }
        })
        .catch((err) =>{
            alert(err.message)
        })
    }
}

export const getBill = (data) =>{
    return {
        type : "GET_BILL",
        payload : data
    }
}

export const startDeleteBill = (id) =>{
    return(dispatch) =>{
        axios.delete(`http://dct-pos-app.herokuapp.com/api/bills/${id}` , {
            headers :{
                "Authorization" : `Bearer ` +localStorage.getItem("token")
            }
        })
        .then((res) =>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            } else {
                dispatch(removeBill(id))
            }
        })
        .catch((err) =>{
            alert(err.message)
        })
    }
}

export const removeBill =(data) =>{
    return{
        type:"REMOVE_BILL",
        payload:data
    }
}