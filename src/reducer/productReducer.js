const productInitisialState = []

const productReducer = (state = productInitisialState , action) =>{
    switch (action.type){
        case "ADD_PRODUCT" :{
            return [...state , {...action.payload}]
        }
        case "GET_PRODUCT" :{
           return  [...action.payload]
        }
        case "EDIT_PRODUCT" :{
            return state.map((el) =>{
                if(el._id === action.payload._id){
                    return {...el , ...action.payload}
                } else {
                    return {...el}
                }
            })
        }
        case "REMOVE_PRODUCT" :{
            return state.filter((ele) =>{
                return ele._id !== action.payload
            })
        }
       
        default :{
            return state
        }
    }

}
export default productReducer