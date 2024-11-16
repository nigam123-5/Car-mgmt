import { useContext, useState } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import img from '../../assets/login21.jpg'
import { ImCross } from "react-icons/im";

import axios from 'axios'

const Login = (props) => {
  
  
  const [userData,setUserData] = useState ({
   
    email:"",
    password:""
  })

  const changeHandler=(e)=>{
    setUserData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }




  const login= async(event)=>{
    event.preventDefault()
    console.log(userData,"logindetails")
    try {
      const response = await axios.post('http://localhost:4000/api/login', userData);
      console.log('login successful:', response.data.token);
      alert("Succesfully Logged in")
      window.location.replace("/");
      localStorage.setItem('auth-token',response.data.token);
      if(response.success){

       
      }
    } catch (error) {
      console.error('login error:', error);
    }

  return (

    <div className="login-container">
      {/* <FontAwesomeIcon icon="fa-sharp-duotone fa-solid fa-circle-xmark" /> */}
     
      <div className="login-img-container">
          <img src={img} alt="Login Image" className="login-img" />
      </div>
      <div className="login-form-container">
        
        <h1>Login  <hr /></h1>
          <form  onSubmit={login} className="login-form">
            <span>
              <p>Email: </p>
              <input type="text" placeholder="enter email" name="email" id="email" value={userData.email} onChange={changeHandler} required />
            </span>
            <span>
              <label >Password: </label>
              <input type="password" placeholder="enter password" name="password" id="password" value={userData.password} onChange={changeHandler} required/>
            </span>
            <br></br>
            <span>
              <p>Forgot Password</p>
              <p>Signup</p>
            </span>
            
            <button type="submit">Login</button>
            <p>Doesn't have an account Click to <Link to={'/signup'}><b onClick={props.signup}>SignUp</b></Link></p>
          </form>
      </div>
      
    </div>
  )
}

export default Login