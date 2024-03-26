import Style from './Login.module.css'
import { useState } from 'react';
import axios from  'axios'
import Avatar from '/src/assets/login3.png'

function Login(){

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);
        try{
            await axios.post('http://localhost:3000/login',
            JSON.parse(JSON.stringify({email, password}))
            )

            setError(`Welcome`)

        } catch (error){
            if(!error?.response){
                setError('Error to acess server')
            } else if (error.response.status == 401) {
                setError ('Invalid credentials')
            }
        }
    }

    return(
        <div className={Style.login}>
            <div className={Style.container}>
                <img className={Style.avatar_image} src={Avatar}></img>
                <div className={Style.credentials}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                </div>
                <div className={Style.userPreference}>
                    <div className={Style.remember}>
                        <input type="checkbox"  className={Style.checkRememb} name="remember me" required></input>
                        <label htmlFor="checkRememb">Remember Me</label>
                    </div>
                    <a className={Style.forgotPass} href="#">Forgot Password?</a>
                </div>
                <div className={Style.buttons}>
                    <button
                        type="submit" 
                        className={Style.buttonLogin} 
                        onClick={(e) => handleLogin(e)}
                    >LOGIN</button>
                   <p className={Style.registerButton}>Don't have account? <a href="/Register">Create Account</a></p> 
                </div>  
               
                <p className={Style.errorMessage}>{error}</p>
            </div>

        </div>
    );

}

export default Login;