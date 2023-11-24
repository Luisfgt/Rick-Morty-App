import React, { useState, useEffect } from 'react';
import style from './Form.module.css';
import validation from './validation';
import logo from './Rick_and_Morty.svg.png';

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    validation(userData, errors, setErrors);
  }, [userData, errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).every((error) => error === '')) {
      login(userData);
    }
  };

  return (
    <div className={style.login}>
      <div className={style.form}>
        <img className={style.logo} src={logo} alt="" />
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className={errors.email ? style.error : style.success}
              />
            </div>
            <span>{errors.email}</span>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className={errors.password ? style.error : style.success}
              />
            </div>
            <span>{errors.password}</span>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
