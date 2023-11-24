import React, { useState } from 'react';
import style from './Form.module.css';
import validation from './validation';
import caset from '../../../assets/caseteLogin.png';
import videoLogin from './VideoTV_byn.mp4';


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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).every((error) => error === '')) {
      login(userData);
    }
  };




  

  return (
    <div className={style.login}>
      <div className={style.form}>
        <img className={style.logo} src={caset} alt="" />
        <div className={style.formContainer}>
          <form className={style.externalForm} onSubmit={handleSubmit}>
            <div className={style.internalForm}>
              <label htmlFor="email">Email</label>
              <input
                className={style.input}
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <span>{errors.email}</span>
            <div className={style.internalForm}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className={style.input}
              />
            </div>
            <span>{errors.password}</span>
            <button className={style.loginButton} type="submit">
              Ingresar
            </button>
          </form>
        </div>
      </div>
      <video className={style.video} src={videoLogin} loop controls autoPlay muted>
      </video>
    </div>
  );
}

export default Form;
