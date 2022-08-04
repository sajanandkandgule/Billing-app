import React from "react";
import { Route ,Link , withRouter } from "react-router-dom";
import Home from "./Home";
import Registers from "./Registers";
import LogIn from "./LogIn";
import Account from "./Account";
import CustomerContainer from "./CustomerContainer";
import ProductContainer from "./ProductContainer";
import BillContainer from "./BillContainer";

import ViewAll from "./ViewAll";
import Generate from "./Generate";

const NavBar = (props) =>{
    const {handleAuth , userLogIn}  =props

    return(
        <div className="text-center">
            <div>
                 <Link to = "/">Home</Link> &nbsp;  
          {
                    userLogIn ? (
                        <>

                <Link to = "/account">Account</Link> 	&nbsp;  
                <Link to = "/customers">Customers</Link>  &nbsp;  
                <Link to ="/products">Products</Link>   &nbsp;  
                <Link to= "/billing">Billing</Link>   &nbsp;  

                <Link to = "/" onClick = {() =>{
                    localStorage.removeItem("token")
                    alert("successfully LogOut")
                    handleAuth()
                    props.history.push("/")
                }}> Logout</Link>
                        </>
                    ) : (
                       <>
                <Link to = "/registers"> Registers</Link> &nbsp;  
                <Link to = "/Login"> LogIn </Link> &nbsp;  
                </>
                    )
         }
         </div>
            
         
            <Route path = "/" component = {Home} exact = {true}/>
            <Route path = "/registers" component = {Registers} exact/>
            <Route path = "/login" render = { (props) =>{
            return <LogIn {...props}
             handleAuth={handleAuth}/>
            }}/>
            <Route path = "/account" component = {Account} exact/>
            <Route path = "/customers" component = {CustomerContainer}exact/>
           <Route path = "/products" component = {ProductContainer} exact/>
           <Route path = "/billing"  component ={BillContainer} exact/>
           <Route path = "/bill/:billId" component ={Generate} exact/>
           <Route path = "/bills/all" component = {ViewAll} exact/>
            
          
           
           
           

        </div>
        
    )
}
export default withRouter(NavBar) 