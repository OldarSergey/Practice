import './Login.css'
import { useState } from "react";
import Report from '../components/Report';

function Login(props) {
    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState({
      username: localStorage.getItem("rememberMe") === "true" ? localStorage.getItem("username") || "" : "",
      password: localStorage.getItem("rememberMe") === "true" ? localStorage.getItem("password") || "" : "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [rememberMe, setRememberMe] = useState(localStorage.getItem("rememberMe") === "true");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleRememberMe = () => {
      setRememberMe(!rememberMe); 
      if (!rememberMe) {
        localStorage.setItem("username", formValues.username);
        localStorage.setItem("password", formValues.password);
        localStorage.setItem("rememberMe", true);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      if (Object.keys(formErrors).length === 0) {
        props.onShowPage();
      }
    };
  
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.password) {
        errors.password = "Password is required!";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Вход</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Имя пользователя :</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label>Пароль: </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
          </div>
          <div className="field">
          <label>
            Запомнить пароль:
            <input
              type="checkbox"
              name="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMe}
            />
          </label>
        </div>
        </form>
        <Report login={formValues.username} password={formValues.password} onSuccessfulLogin={props.onShowPage}></Report>
      </div>
    );
}
export default Login; 