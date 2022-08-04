import {createStore , combineReducers , applyMiddleware} from "redux"
import userReducer from "../reducer/userReducers"
import thunk from 'redux-thunk'
import customerReducer from "../reducer/customerReducer"
import productReducer from "../reducer/productReducer"
import billingReducer from "../reducer/billingReducer"
const configureStore = () =>{

    const store = createStore(combineReducers({

        user : userReducer,
        customer:customerReducer,
        product:productReducer,
        bills : billingReducer
        
    }), applyMiddleware(thunk))
    return store
}

export default configureStore
