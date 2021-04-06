import { withFormik } from 'formik';
import * as Yup from 'yup';

const LoginFormik = withFormik({
    mapPropsToValues: (props) => {
      return {
        login: props.login|| '',
        password: props.password || ''
      }
    },
    validationSchema: Yup.object().shape({
      login: Yup.string().login('Login not valid').required('Login is required'),
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
});

export default LoginFormik;