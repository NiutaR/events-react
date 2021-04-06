//import { validateYupSchema } from 'formik';
import React from 'react';
import { withFormik, Form, Field } from 'formik'
//import { Validation } from './Validation';
import * as Yup from 'yup';
import { LoginFormik } from './'



const Forms = (props) => {
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
    <React.Fragment>
    <div>
      <h1>Check components/Form.js file</h1>
      <p>Below you fill find register and login forms.</p>
      <p>Validate values of each field on your preferences. The more secure the better.</p>
      <p>After user submitted register form inform him about it and store user data somewhere.</p>
      <p>When submiting login form check if such a user has been registered.</p>
      <p>If user exists hide all the forms and show a test 'Logged in successfully'</p>
      <p>If user does not exist then show an error message below login button</p>
      <div>
        <form >
        <h1>Register</h1>
        <input placeholder="login" type="text" />
        <input placeholder="password" type="password" />
        <input type="submit" value="Register" />
        </form>
      </div>
      <div>
        <Form className='form-container'>
        <h1>Login</h1>
        <Field type="text" name="login" className={"form-control"} placeholder="Login" />
              { touched.login && errors.login && errors.login }
              <Field type="password" name="password" className={"form-control"} placeholder="Password" />
              { touched.password && errors.password && errors.password }
        <input type="submit" value="Login" />
        </Form>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Forms;