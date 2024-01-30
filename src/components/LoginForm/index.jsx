// import { object, number, string, date, mixed, array } from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form id="test" className="test1234">
        <div>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="sadsad" />
        </div>
        <div>
          <Field name="password" type="password" />
          <ErrorMessage
            name="email"
            component={ErrorDetail}
            className="sadsad"
          />
        </div>
        {/* <Field as="select" name="select">
              <option value={1}>Value 1</option>
              <option value={2}>Value 2</option>
              <option value={3}>Value 3</option>
            </Field> */}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

/*
  Створити окрему сторінку Реестрації
  яка має містити компонент хедера з навігацією
  і компонент Форми реєстрації

  Для реєстрації користувачу треба надати наступні дані:
    логін
    ім'я
    прізвище
    емелй
    пароль
    * підтвердження паролю
    * дата народження

    Для стоворення компоненту форми використовувати бібліотеку Formik

    * Організувати валідацію надісланих даних
    * Показувати помилки які виникають при валідації

*/

function ErrorDetail({ children, ...rest }) {
  return <div {...rest}>Error: {children}</div>;
}

export default LoginForm;
