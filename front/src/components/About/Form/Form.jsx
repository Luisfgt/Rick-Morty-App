import { useState } from 'react';
import style from './Form.module.css'
import validation from './validation';


function Form({login}) {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value })
        validation({ ...userData, [property]: value }, errors, setErrors)

    }


    return (
        <div className={style.form}>
            <form onSubmit={() => login(userData)}>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text" name='username' value={userData.username} onChange={handleChange} className={errors.username ? style.error : style.success}/>
                </div>
                <span>{errors.username}</span>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" name='password' value={userData.password} onChange={handleChange} className={errors.password ? style.error : style.success}/>
                </div>
                <span>{errors.password}</span>
                <button type="Submit">Login</button>
            </form>
        </div>
    )
}

export default Form;