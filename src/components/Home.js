import React from "react"
import img from "../components/images/image.jpg"

const Home = (props) =>{

    return(
        <div className="text-center p-5">
            <h2>
                
              WELCOME TO BILLING SITE !!!
              
            </h2>
            <img src = {img}  style ={{width: "50%" , height : "50"}}/>
        </div>
    )
}
export default Home