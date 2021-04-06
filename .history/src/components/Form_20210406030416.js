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
    
  
  return ()

}


export default Form;



