import React, {useState} from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/';


const RegistrationForm = (props) => {
    const [state , setState] = useState({
        login : "",
        password : ""
        //confirmPassword: "",
        //successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.login.length && state.password.length) {
            props.showError(null);
            const payload={
                "login":state.login,
                "password":state.password,
            }
            axios.post(API_BASE_URL+'register', payload)
                .then(function (response) {
                    if(response.data.code === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful!'
                        }))
                        
                        props.showError('Please try again!')
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    
  
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(
        <div >
            <form>
                <div className="form-group text-left">
                
                <input type="login" 
                       className="form-control" 
                       id="login" 
                    
                       placeholder="Enter Login" 
                       value={state.login}
                       onChange={handleChange}
                />
              
                </div>
                <div className="form-group text-left">
                   
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                  
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
            
        </div>
    )
}

export default RegistrationForm;