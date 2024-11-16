import { useState } from "react"
import { Link } from "react-router-dom"
// import SignupImg from "../../assets/Thar"
// import { FinanceContext } from "../../context/financeContext"
import '../Login/Login.css'
import img from '../../assets/login1.jpg'
import axios from 'axios'

const Signup = (props) => {
  
 
  const [signupData,setSignupData] = useState ({
    
    name:"",
    email:"",
    role:"",
    password:""

  })

  const changeHandler=(e)=>{
    setSignupData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const sign= async (event)=>{
    event.preventDefault()
    console.log(signupData,"signupdata")
    try {
      const response = await axios.post('http://localhost:4000/api/signup', signupData);
      console.log('Signup successful:', response.data.success);
      window.location.replace("/");
      localStorage.setItem('auth-token',response.data.token);
      alert('Successfully Signed up')
      // if(response.data.success){
      //   localStorage.setItem('auth-token',response.data.token)
      //   
      //   window.location.replace("/");
      // }
    
    } catch (error) {
      console.error('Signup error:', error);
    }
  }




  
  return (
    <div className="login-container">
     
      <div className="login-img-container">
          <img src={img} alt="Sign Image" className="login-img" />
      </div>
      <div className="login-form-container">
        <h1>SignUp<hr /></h1>
          <form  onSubmit={sign} className="login-form">
          <span>
              <p>FullName: </p>
              <input type="text" placeholder=" name" name="name" id="name" value={signupData.name} onChange={changeHandler} required />
            </span>
            <span>
              <p>Email: </p>
              <input type="text" placeholder=" email" name="email" id="email" value={signupData.email} onChange={changeHandler} required />
            </span>
            <span>
              <p>Role: </p>
              <input type="text" placeholder=" Role." name="role" id="role" value={signupData.role} onChange={changeHandler} required />
            </span>
            <span>
              <label >Password: </label>
              <input type="password" placeholder="password" name="password" id="password" value={signupData.password} onChange={changeHandler} required/>
            </span>
            <button type="submit">Signup</button>
            <p>Already! have an account Click to <Link to={'/login'}> <b onClick={props.login}>Login</b> </Link></p>
          </form>
      </div>
      
    </div>
  )
}

export default Signup