import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from 
const Form = () => {

  /*const [submitting, setSubmitting] = useState(false);
  const [isLogging, setIsLogging ] = useState(false);
  const [user, setUser] = useState({login: '', password: ''});
  const [values, setValues] = useState({login: '', password: ''});


  const handleChangeRegister = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  }
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true); 
  }

  const createUser = async (event) => {
    event.preventDefault()
    let formData = {
      login: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await Validation.isValid(formData);
    console.log(isValid);*/

    
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
    <input placeholder="Login" type="text" onChange={} />
    <input placeholder="Password" type="password" onChange={} />
    <input
      type="submit"
      value="Register"
      onClick={}
      disabled={}
    />
  </div>
  <div>
    <h1>Login</h1>
    <input placeholder="Login" type="text" onChange={} />
    <input placeholder="Password" type="password" onChange={} />
    <input type="submit" value="Login" onClick={} />
  </div>
  <h2>{message}</h2>
</div>
  );
}


export default Form;



