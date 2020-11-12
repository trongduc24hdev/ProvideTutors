import React from "react";
import { Link } from "react-router-dom";
import { FormBox } from "../common";
import { Form as ReForm } from "reactstrap";
import { isEmpty, isEmail } from "validator";

const Form = ({ handleSubmit }) => {
  const [error, setError] = React.useState({});
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [errorLogin, setErrorLogin] = React.useState();

  const validate = () => {
    const errorState = {};
    // check validate
    if (!isEmail(form.email)) {
      errorState.email = "Wrong email";
    }
    if (isEmpty(form.password)) {
      errorState.password = "Wrong password";
    }
    return errorState;
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const errorState = validate();

    if (Object.keys(errorState).length > 0) {
      return setError(errorState);
    }

    const formData = {
      login: form.email,
      password: form.password,
    };
    handleSubmit(formData);
  };
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value.trim() });
  };

  const handleFocus = (event) => {
    setError({
      ...error,
      [event.target.name]: "",
    });
    setErrorLogin("");
  };

  return (
    <section onSubmit={handleSubmitForm} className="login">
      <div className="login__inner">
        <ReForm className="radius-l login__inner__form">
          <div className="login__inner__form__text">
            <p>Log in to your account</p>
            <div className="error">{errorLogin}</div>
          </div>

          <FormBox
            propsInput={{
              name: "email",
              placeholder: "Email",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.email,
              disabled: false,
            }}
            error={error.email}
          />

          <FormBox
            propsInput={{
              type: "password",
              name: "password",
              placeholder: "Password",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.password,
              disabled: false,
            }}
            error={error.password}
          />
          <button disabled={false} className="button button--secondary">
            Login
          </button>
          <div className="flex space-between">
            <div>
              <Link to="/forgot-password" className="primary">
                Forgot Password?
              </Link>
            </div>
            <div>
              <Link to="/register" className="primary">
                Register
              </Link>
            </div>
          </div>
        </ReForm>
      </div>
    </section>
  );
};

export default Form;