import axios from "axios"


export const startGetUser=(data)=>{
    return(dispatch)=>{
        axios.get(`http://dct-pos-app.herokuapp.com/api/users/account` , {
            headers : {
                "Authorization" : `Bearer ` +localStorage.getItem("token")
            }
        })
        .then((res)=>{
            const result = res.data
             dispatch(addUser(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const addUser=(data)=>{
    return {
        type : 'ADD_User',
        payload : data
    }
}
