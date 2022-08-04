import React , {useState , useEffect} from "react";
import NavBar from "./components/NavBar";

import { useSelector } from "react-redux";

const App =(props) => {

  const [ userLogIn  ,setUserLogIn]  = useState(false)
  const [isLoading , setIsLoading]  =useState(false)

  const products = useSelector((state) =>{
    return state.product
  })

  const bills = useSelector((state) =>{
    return state.bills
  })
 

  const customer  = useSelector((state) =>{
    return state.customer
  })

  const user = useSelector((state) =>{
    return state.user
  })
  useEffect(()=>{
    if(products.length>0 && customer.length>0 && bills.length>0 && Object.keys(user).length> 0){
      setIsLoading(false)
    }
  },[customer, products, bills])



  const handleAuth = () =>{
    setUserLogIn(!userLogIn)
  }

  useEffect(() =>{
   if(localStorage.getItem("token")){
    handleAuth()
    }
  },[])

  return(
     <>
     {
      !isLoading && (
    <div>
     
      <div className="text-center clr-clr"  >
        <h1> Billing App</h1>
        </div>
        <NavBar userLogIn = {userLogIn} handleAuth = {handleAuth}/>
    </div>
    )
  }
  </>
  )
}
export default App