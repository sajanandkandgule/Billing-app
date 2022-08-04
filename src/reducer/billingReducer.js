const billingInitialState = []


const billingReducer = (state = billingInitialState , action) => {

    switch(action.type){
        case "ADD_BILLING" :{
            return [ {...action.payload}, ...state]
        }
        case "GET_BILL" :{
            return [...action.payload]
        }
        case "REMOVE_BILL" :{
            return state.filter((ele) =>{
              return  ele._id !== action.payload
            })
        }
        default :{
            return state
        }
    }
}

export default billingReducer
