const customerInitialState = []

const customerReducer = (state = customerInitialState, action) =>{

    switch(action.type){
        case "ADD_CUSTOMER" :{
            return [...state , {...action.payload}]
        }

        case "GET_CUS" :{
            return [...action.payload]
        }
        case "EDIT_ITEM" :{
            return state.map((ele) =>{
                if(ele._id === action.payload._id){
                    return {...ele , ...action.payload}
                } else {
                    return {...ele}
                }
            }) 
        }
        case "REMOVE_ITEM" :{
            return state.filter((ele) =>{
                return ele._id !==action.payload
            })

        }

        default :{
            return state
        }
    }
}
export default customerReducer