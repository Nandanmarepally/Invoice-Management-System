import React,{ useState } from 'react'
import './Login.css'



 const Login = () => {

    const [action,setAction] = useState("Sign Up");


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
                <input type="text" placeholder="Enter Name" />
            </div>}
           
            <div className="input">
                <input type="email" placeholder="Enter E-mail" />
            </div>
            <div className="input">
                <input type="password" placeholder="Enter Password"/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
         <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        </div>
    </div>
  );
}

export default Login