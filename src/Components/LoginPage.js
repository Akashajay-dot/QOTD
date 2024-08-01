import React, { useContext } from 'react'
import "../Styles/LoginPage.css"
import { GoogleLogin } from '@react-oauth/google';
import image from "../Assets/image (1).png"
import { GlobalStateContext } from '../Context/GlobalStateContext';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
    const { state, setLogedin ,setId,setCategory ,setUserName,setLoading} = useContext(GlobalStateContext);
    const notify = () => toast.error("Error login");

  return (
    <div className='LoginPage'>
        <div className="login">
            <div className="logininner">
                <h1 className='loginHead'>Implementation Question Of The Day</h1>
                <p className='loginDisc'>Your platform for knowledge assessment and learning! <br /> Please log in to access the quizzes and enhance your skills.</p>
                <GoogleLogin
                    onSuccess={async Response => {      
                        const decoded = jwtDecode(Response.credential);  
                        const  credential  = Response.credential;
                        // if(decoded.email.endswith("@gmail.com")){
                          
                        // }
                        try {
                          const res = await axios.post('http://localhost:57101/api/auth/validate-token', {
                          credential: credential
                          });
                          if(res.data.Isvalid){
                          // console.log(res.data.Payload.name)
                          setId(res.data.UserId);
                          setUserName(res.data.Payload.name);
                          localStorage.setItem('token',credential);

                         setLogedin(true);
                         setCategory(res.data.category);
                         setLoading(true);

                          }
                          else{
                          notify();

                          }
                          
                          
                        } catch (error) {
                          console.error('An error occurred:', error);
                          notify();

                        }
          
          
          
          
                      }}
                      onError={() => {
                        console.log('Login Failed');
                        notify();

          
                     
                }}/>
                {/* <a href="">Forgot Password?</a>  */}
                <p className='loginbutm'>By logging in, you agree to abide by the company's usage policies.</p>
            </div>
        </div>
        <div className="hero">
            <img src={image} alt="" />
        </div>
        <ToastContainer />

    </div>
  )
}

export default LoginPage