import axios from "axios"

export const startPostProduct = (FormData) =>{
    return(dispatch) =>{
        axios.post("http://dct-pos-app.herokuapp.com/api/products" ,FormData , {
            headers :{
                "Authorization" : `Bearer ` + localStorage.getItem("token")
            }
        })
        .then((res) =>{
            // console.log("pro" , res.data)
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.massage)
            } else {
                dispatch(addProduct(result))
            }
        })
        .catch((err) =>{
            alert(err.message)
        })
    }

}

export const addProduct = (FormData) =>{
    return{
        type :"ADD_PRODUCT",
        payload : FormData
    }
}

export const startGetProduct = () =>{
    return(dispatch) =>{
        axios.get("http://dct-pos-app.herokuapp.com/api/products" ,{
            headers :{
                "Authorization" : `Bearer ` + localStorage.getItem("token")
            }
        })
            .then((res) =>{
                const result = res.data
                console.log(result)
                if(result.hasOwnProperty("errors")){
                    alert(result.message)
                } else {
                    dispatch(getProduct(result))
                }
            })
            .catch((err) =>{
                alert(err.message)
            })
       
    }

}

export const getProduct = (FormData) =>{
    return {
        type :"GET_PRODUCT",
        payload : FormData

    }
}

export const startRemoveProduct = (_id) =>{
    return(dispatch) =>{
        axios.delete(`http://dct-pos-app.herokuapp.com/api/products/${_id}` ,{
            headers :{
                "Authorization" : `Bearer ` + localStorage.getItem("token")
            }
        })
        .then((res) =>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            }else {
                dispatch(removeProduct(_id))
            }
        })
    }

}

export const removeProduct = (_id) =>{
    return {
        type : "REMOVE_PRODUCT",
        payload: _id
    }
}

export const startEditProduct = ( FormData , _id ) =>{
    // console.log("get" , _id , FormData)
    return(dispatch) =>{
        axios.put(`http://dct-pos-app.herokuapp.com/api/products/${_id}` , FormData , {
            headers :{
                "Authorization" : `Bearer `  + localStorage.getItem("token")
            }
        })
        .then((res) =>{
            // console.log(res)
            const result = res.data
           
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            } else {
                dispatch(editProduct(result))
            }
        })
        .catch((err) =>{
            alert(err.message)
        })
    }
}

export const editProduct = (FormData) =>{
 return {
    type : "EDIT_PRODUCT",
    payload : FormData
 }
}
