// import { object, number, string, date, mixed, array } from 'yup';
import { Formik, Form, Field } from 'formik';
import { loginSchema } from '../../utils/validationSchemas';
import styles from './loginForm.module.css';

const initialValues = {
  email: '',
  password: '',
  // select: '',
};

function LoginForm(props) {
  function handleSubmit(values, actions) {
    console.log(values);
    console.log(actions);

    actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form id="test" className="test1234">
        <Field type="email" name="email" />
        <Field name="password" type="password" />
        {/* <Field as="select" name="select">
              <option value={1}>Value 1</option>
              <option value={2}>Value 2</option>
              <option value={3}>Value 3</option>
            </Field> */}
        <button>Submit</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
