//import { validateYupSchema } from 'formik';
import React from 'react';
import { Form, Field } from 'formik'
//import { Validation } from './Validation';

import   LoginFormik   from './LoginFormik';

//import { withFormik } from 'formik';
//import * as Yup from 'yup';

const Forms = () => {
  /*const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    //alert('You submitted the form')
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }
  const createUser = async (event) => {
    event.preventDefault()
    let formData = {
      login: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await Validation.isValid(formData);
    console.log(isValid);*/

  const { touched, errors} = props;
    
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
  );
}


//export default LoginFormik;

export default Forms;