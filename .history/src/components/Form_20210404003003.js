bmitted register form inform him about it and store user data somewhere.</p>
      <p>When submiting login form check if such a user has been registered.</p>
      <p>If user exists hide all the forms and show a test 'Logged in successfully'</p>
      <p>If user does not exist then show an error message below login button</p>
      <div>
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input placeholder="login" type="text" value={value.login} />
        <input placeholder="password" type="password" />
        <input type="submit" value="Register" />
        </form>
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