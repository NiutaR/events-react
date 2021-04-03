import React from 'react';
import { Validation } from ''
const Form = () => {
  return (
    <div>
      <h1>Check components/Form.js file</h1>
      <p>Below you fill find register and login forms.</p>
      <p>Validate values of each field on your preferences. The more secure the better.</p>
      <p>After user submitted register form inform him about it and store user data somewhere.</p>
      <p>When submiting login form check if such a user has been registered.</p>
      <p>If user exists hide all the forms and show a test 'Logged in successfully'</p>
      <p>If user does not exist then show an error message below login button</p>
      <div>
        <h1>Register</h1>
        <input placeholder="Login" type="text" />
        <input placeholder="Password" type="password" />
        <input type="submit" value="Register" />
      </div>
      <div>
        <h1>Login</h1>
        <input placeholder="Login" type="text" />
        <input placeholder="Password" type="password" />
        <input type="submit" value="Login" />
      </div>
    </div>
  )
}

export default Form;