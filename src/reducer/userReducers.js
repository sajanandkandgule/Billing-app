const userInitialState = []

const userReducer = (state = userInitialState , action) =>{

    switch(action.type) {
        case 'ADD_User' :{
            return {...action.payload}
        }
        default :{
            return state
        }
    }
}
export default userReducer



