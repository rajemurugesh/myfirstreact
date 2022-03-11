import React, { useState} from "react"
import "./signup.css"
import axios from "axios"
import { useHistory} from "react-router-dom"


const Signup = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        phoneNumber:"",
        confirmPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        const { name, email, phoneNumber, password, confirmPassword } = user
        if( name && email && phoneNumber &&password && (password === confirmPassword)){
            axios.post("http://localhost:8080/signup", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
           })
        } else {
             alert("invlid input")
         }
        
    }
    return(
        <div className="signup">
            {console.log("User", user)}
            <h1>Signup</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={ handleChange }></input>
            <input type="number" name="phoneNumber" value={user.phoneNumber} placeholder="Enter your phoneNumber" onChange={ handleChange}></input>
            <input type="password" name="password"value={user.password} placeholder="Enter your password" onChange={ handleChange }></input>
            <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder="confirm password" onChange={ handleChange }></input>
            <div className="button" onClick={signup} >Signup</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
            <div>
                <p className="link">
                    Already Registered? &ensp;
                    <a href="/login">Login</a>
                </p>   
            </div>
        </div>
    )
}

export default Signup