import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      // console.log(formData);
      const newUser = {
        name,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post("/api/users", body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p># React Registraton Form using useState Hook



  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            required
          />
        </div>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
          />
        </div>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            value={password2}
          />
        </div>
        <input
          onChange={onChange}
          type='submit'
          className='btn btn-primary'
          value='Register'
        />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;