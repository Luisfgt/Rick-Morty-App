const validation = (userData, errors, setErrors) => {
    //email
    if (!userData.email.length) {
      setErrors({ ...errors, email: 'Por favor completa este campo' });
    } else if (userData.email.length > 35) {
      setErrors({ ...errors, email: 'El correo electrónico no puede superar los 35 caracteres' });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
      setErrors({ ...errors, email: 'Correo electrónico inválido' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  
    //password
    if (userData.password.length < 6 || userData.password.length > 10) {
      setErrors({ ...errors, password: 'La longitud está incorrecta' });
    } else if (!/\d/.test(userData.password)) {
      setErrors({ ...errors, password: 'Debe contener al menos un número' });
    } else {
      setErrors({ ...errors, password: '' });
    }
  };
  

export default validation;
