import React, { useState, useEffect }from 'react';
//import styles from './styles'

const Form = () => {

  const [values, setValues] = useState({login: "", password: ""});
  const [user, setUser] = useState({login: "", password: ""});
  const [errors, setErrors] = useState({login: "", password: ""});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);


  const handleChangeRegister = event => {
    console.log(event.target.name);
    console.log(event.target.value);

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
      
    }
  }, [errors])

  function submit() {
    localStorage.setItem("credentials", JSON.stringify(values));
    document.getElementById("register-field").style.display = "none";
    document.getElementById("registered-info").innerHTML = "You are registered now! Please log in.";
  }

  const handleChangeSignIn = event => {
    console.log(event.target.name);
    console.log(event.target.value);

    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleLogin = event1 => {
    event1.preventDefault();
    setErrors(validate(user));
    setIsLoggingIn(true);
  }
  

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isLoggingIn) {
      login();
    }
  }, [errors])

  function login() {
    if (JSON.parse(localStorage.getItem("credentials")).login === user.login && JSON.parse(localStorage.getItem("credentials")).password === user.password) { 
      console.log("Logged in successfully");
      document.getElementById("hide-form").style.display = "none";
      document.getElementById("login-success").innerHTML = "You are logged in successfully!";

    }  else {
      document.getElementById("login-fail").innerHTML = "Credentials do not match! Plese verify your login or password.";
      }
    }

  function validate(values) {
    let errors = {};
    if (!values.login) {
      errors.login = "Login is required";
    } else if (values.login.length < 8) {
      errors.login = "Email address should be 8 or more characters";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 10) {
      errors.password = "Password needs to be more than 10 characters";
    }
    return errors;
  }

  return (
    <div >
        <h1>Check components/Form.js file</h1>
        <p>Below you fill find register and login forms.</p>
        <p>Validate values of each field on your preferences. The more secure the better.</p>
        <p>After user submitted register form inform him about it and store user data somewhere.</p>
        <p>When submiting login form check if such a user has been registered.</p>
        <p>If user exists hide all the forms and show a test 'Logged in successfully'</p>
        <p>If user does not exist then show an error message below login button</p>
        <div id="hide-form">
          <form onSubmit={handleSubmit}>
            <div id="register-field">
              <h1>Register</h1>
              <input 
                placeholder="Login"
                type="text" 
                name="login" 
                value={values.login}
                onChange={handleChangeRegister}
              />
              {errors.login && }

              <input 
                placeholder="Password" 
                type="password" 
                name="password"
                value={values.password}
                onChange={handleChangeRegister}
                
              />
              {errors.password && <p style={styles.Error}>{errors.password}</p>}
              <input type="submit" />
            </div>
          </form>

          <form id="login-field" onSubmit={handleLogin}>
            <h3 id="registered-info"></h3>
            <h1>Login</h1>
            <input  
              placeholder="Login" 
              type="text" 
              name="login"
              value={user.login}
              onChange={handleChangeSignIn}
            />
            {errors.login && <p style={styles.Error}>{errors.login}</p>}
            <input 
              placeholder="Password" 
              type="password" 
              name="password"
              value={user.password}
              onChange={handleChangeSignIn} 
            />
            {errors.password && <p style={styles.Error}>{errors.password}</p>}

            <input type="submit" value="Login"  />
            <p id="login-fail"></p>
          </form>
        </div>
        <div><h1 id="login-success"></h1></div>
    </div>
    // 
  )
}


export default Form;