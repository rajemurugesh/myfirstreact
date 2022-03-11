import React from "react"
import "./homepage.css"
import Header from "../header/header"
import Navbar from "../navbar/navbar"
import Grid from "../grid/grid"


const Homepage = ({setLoginUser}) => {
    return (
        <div className = "homepage">
        
        <Header/>
        <Navbar/>
        <Grid/>
         
            </div>
           
        
            
            
            // {/* <div className="button" onClick={() => setLoginUser({})}>LOGOUT</div> */}
        
           
            // </div>
            // </div>
    )
}

export default Homepage