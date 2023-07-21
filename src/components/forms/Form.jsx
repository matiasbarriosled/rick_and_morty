import { useState } from 'react';
import validateInput from './validations';
import styles from './Form.module.css';

export default function Form({login}){

    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    function handleChange(event){
        setUserData({...userData, [event.target.name]:event.target.value});
        setErrors(validateInput(userData));
    }

    /* Previene el comportamiento por defecto del formulario, evitando que la página
     se recargue al enviar el formulario. Esto se logra llamando al método 
     preventDefault() en el evento pasado como argumento. */
    function handleSubmit(event){
        event.preventDefault();
        login(userData)
    }

    return (
        <>
            <div className={styles.divDisplay}>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/edaa0b57088529.59c8bd95b5edc.gif" alt="RickAndMorty" />
                {/* Cuando el usuario hace clic en el botón "Login" dentro del formulario
                , se dispara el evento onSubmit del formulario. La función handleSubmit 
                se encarga de manejar ese evento y realizar las acciones correspondientes. */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">email</label>
                    <input type='text' name='email' value={userData.email} onChange={handleChange}/>
                    <p className={styles.errors}>{errors.email}</p>

                    <label htmlFor="">password</label>
                    <input type='password' name='password' value={userData.password} onChange={handleChange}/>

                    <p className={styles.errors}>{errors.password}</p>
                    {errors.password && <ul className={styles.errors}>
                        <li>una mayuscula</li>
                        <li>un numero</li>
                        <li>un caracter especial</li>
                    </ul>}

                    <button>Login</button>
                </form>
            </div>
        </>
    )
}
