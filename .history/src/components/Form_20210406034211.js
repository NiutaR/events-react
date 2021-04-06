
import React from 'react';
import  Registration  from './Registration';
import Login  from './Login';


const forms = [
  {
    name: 'Registration',
    component: Registration
  }, 
  {
    name: 'Login',
    component: Login
  },
]
function Form() {
  const [selectedForm, setSelectedForm] = useState(0);

  const SelectedFormsComponent = forms[selectedForm].component;

    return(
      <div className='Form'>
      <h1>Check components/Form.js file</h1>
      <p>Below you fill find register and login forms.</p>
      <p>Validate values of each field on your preferences. The more secure the better.</p>
      <p>After user submitted register form inform him about it and store user data somewhere.</p>
      <p>When submiting login form check if such a user has been registered.</p>
      <p>If user exists hide all the forms and show a test 'Logged in successfully'</p>
      <p>If user does not exist then show an error message below login button</p>
      {forms.map((forms, index) => (
        <button onClick={() => setSelectedForm(index)} key={index}>
          {form.name}
        </button>
      ))}
      <SelectedExerciseComponent />
      </div>
    );
}

export default Form;


