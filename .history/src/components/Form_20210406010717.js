//import { validateYupSchema } from 'formik';
//import React from 'react';
//import { Form, Field } from 'formik'
//import { Validation } from './Validation';



//import { withFormik } from 'formik';
//import * as Yup from 'yup';

/*const Forms = () => {
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
    console.log(isValid);

    
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
}*/


//export default LoginFormik;



/*import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginPage = (props) => {
  
  const { touched, errors } = props;
  return(
    <React.Fragment>
      <div>
      <h1>Check components/Form.js file</h1>
      <p>Below you fill find register and login forms.</p>
      <p>Validate values of each field on your preferences. The more secure the better.</p>
      <p>After user submitted register form inform him about it and store user data somewhere.</p>
      <p>When submiting login form check if such a user has been registered.</p>
      <p>If user exists hide all the forms and show a test 'Logged in successfully'</p>
      <p>If user does not exist then show an error message below login button</p>
    </div>
      <div className="container">
        <div className="login-wrapper">
          <h2>Login Page</h2>
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" className={"form-control"} placeholder="Email" />
              { touched.email && errors.email && <span className="help-block text-danger">{errors.email}</span> }
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className={"form-control"} placeholder="Password" />
              { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || '',
      password: props.password || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required')
  }),
  handleSubmit: (values) => {
    const REST_API_URL = "YOUR_REST_API_URL";
    fetch(REST_API_URL, {
      method: 'post',
      body: JSON.stringify(values)
    }).then(response=> {
      if (response.ok) {
        return response.json();
      } else {
        // HANDLE ERROR
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      console.log(data);
    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  }
})(LoginPage);

export default LoginFormik;*/

import React, { useEffect } from "react";

const Form = () => {
  const [users, setUsers] = React.useState([]);

  const [registerLogin, setRegisterLogin] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [loginLogin, setLoginLogin] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [logged, setLogged] = React.useState(false);

  const [message, setMessage] = React.useState("");
  const [registerEnable, setRegisterEnable] = React.useState(true);
  useEffect(() => {
    if (
      registerLogin.match(
        /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/ //minimum eight characters, cannot start and end with . and _
      ) &&
      registerPassword.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) //minimum eight characters, at least one letter and one number
    ) {
      setRegisterEnable(false);
    } else {
      setRegisterEnable(true);
    }
  }, [registerLogin, registerPassword]);

  const changeRLog = (e) => {
    setRegisterLogin(e.target.value);
  };
  const changeRPas = (e) => {
    setRegisterPassword(e.target.value);
  };

  const changeLLog = (e) => {
    setLoginLogin(e.target.value);
  };
  const changeLPas = (e) => {
    setLoginPassword(e.target.value);
  };

  const onHandleSubmitReg = (e) => {
    e.preventDefault();
    if (users.findIndex((x) => x.login === registerLogin) === -1) {
      setUsers([
        ...users,
        { login: registerLogin, password: registerPassword },
      ]);
      setMessage("successfully registered");
    } else {
      setMessage("user already exist");
    }
  };
  const onHandleSubmitLog = (e) => {
    e.preventDefault();
    if (
      users.findIndex((x) => x.login === loginLogin) === -1 &&
      users.findIndex((x) => x.password === loginPassword) === -1
    ) {
      setLogged(false);
      setMessage("Invalid credentials");
    } else {
      setLogged(true);
    }
  };

  return !logged ? (
    <div>
      <h1>Check components/Form.js file</h1>
      <p>Below you fill find register and login forms.</p>
      <p>
        Validate values of each field on your preferences. The more secure the
        better.
      </p>
      <p>
        After user submitted register form inform him about it and store user
        data somewhere.
      </p>
      <p>When submiting login form check if such a user has been registered.</p>
      <p>
        If user exists hide all the forms and show a test 'Logged in
        successfully'
      </p>
      <p>
        If user does not exist then show an error message below login button
      </p>
      <div>
        <h1>Register</h1>
        <input placeholder="Login" type="text" onChange={changeRLog} />
        <input placeholder="Password" type="password" onChange={changeRPas} />
        <input
          type="submit"
          value="Register"
          onClick={onHandleSubmitReg}
          disabled={registerEnable}
        />
      </div>
      <div>
        <h1>Login</h1>
        <input placeholder="Login" type="text" onChange={changeLLog} />
        <input placeholder="Password" type="password" onChange={changeLPas} />
        <input type="submit" value="Login" onClick={onHandleSubmitLog} />
      </div>
      <h2>{message}</h2>
    </div>
  ) : (
    <h2>Logged Succesfuly</h2>
  );
};

export default Form;