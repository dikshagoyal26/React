import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  return (
    <div>
      <h1>Login Here!!</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "required";
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(()=>{
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false)
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
          {isSubmitting}
            <Form onSubmit={handleSubmit}>
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" placeholder="pwd" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Login;
