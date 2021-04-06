import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiConstants';

const Form = () => {
  
    function RegistrationForm(props) {
      const [state, setState] = useState({
        login: '', 
        password: ''
      })
      const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
          ...prevState,
          [id] : value
        }))
      }
      const sendDetailsToServer = () => {
        if(state.login.length && state.password.lenght) {
          props.showError(null);
          const payload={
            'login':state.login,
            'password':state.password,
          }
          axios.post(API_BASE_URL+'register', payload)
          .then(function (response) {
            if(response.data.code === 200) {
              setState(prevState => ({
                ...prevState,
                'successMessage' : 'Registration successful.'
              }))
              redirectToRegistration();
              props.showError(null)
            } else {
              props.showError('Some error');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        } else {
          props.showError('Please enter valid login and password')
        }
      }
      const redirectToRegistration = () => {
        props.updateTitle('Registration')
        props.history.push('/form');
      }
      const handleSubmitClick = (e)=> {
        e.preventDefault();
        if(state.password === true) {
          sendDetailsToServer()
        } else {
          props.showError('Password do not match');
        } 
      }
    
  
  return (
    
    <div>
      <h1>Check components/Form.js file</h1>
      <p>Below you fill find register and login forms.</p>
      <p>Validate values of each field on your preferences. The more secure the better.</p>
      <p>After user submitted register form inform him about it and store user data somewhere.</p>
      <p>When submiting login form check if such a user has been registered.</p>
      <p>If user exists hide all the forms and show a test 'Logged in successfully'</p>
      <p>If user does not exist then show an error message below login button</p>
    </div>
    <div>
    <h1>Register</h1>
    <form>
    <input placeholder="Login" type="text" value={}/>
    <input placeholder="Password" type="password" />
    <input
      type="submit"
      value="Register"
      
    />
  </div>
  <div>
    <h1>Login</h1>
    <input placeholder="Login" type="text" />
    <input placeholder="Password" type="password" />
    <input type="submit" value="Login" />
  </div>

</div>
  );
}


export default Form;



