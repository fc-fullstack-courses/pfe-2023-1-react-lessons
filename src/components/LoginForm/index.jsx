// import { object, number, string, date, mixed, array } from 'yup';
import { Formik } from 'formik';
import { loginSchema } from '../../utils/validationSchemas';
import styles from './loginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm(props) {

  function handleSubmit (values, actions) {
    console.log(values);
    console.log(actions);

    actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} >
      {(formikProps) => {
        console.log(formikProps);

        return (
          <form onSubmit={formikProps.handleSubmit}>
            <input
              type="email"
              name="email"
              value={formikProps.values.email}
              onChange={formikProps.handleChange}
            />
            <input />
            <button>Submit</button>
          </form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
