import Style from './Login.module.css'
import { useState } from 'react';
import axios from  'axios'
import Avatar from '/src/assets/login3.png'

function Login(){

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(username, password);
        try{
            await axios.post('http://localhost:3000/login',
            JSON.parse(JSON.stringify({username, password}))
            )

            setError(`Welcome ${username}`)

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
                            type="text" 
                            name="username" 
                            placeholder="username" 
                            required
                            onChange={(e) => setUsername(e.target.value)}
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
                    <a className={Style.registerButton} href="/Register">Register</a>
                </div>  
               
                <p className={Style.errorMessage}>{error}</p>
            </div>

        </div>
    );

}

export default Login;