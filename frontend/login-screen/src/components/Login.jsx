import { useState } from 'react';
import axios from  'axios'

import Avatar from '/src/assets/Avatar.png'

function Login(){

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');
    const[user, setUser] = useState(null);


    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);
        try{
            const response = await axios.post('http://localhost:3000/login',
            JSON.parse(JSON.stringify({email, password}))
            )

            setUser(response.data)
            setError('')
        } catch (error){
            if(!error?.response){
                setError('Error to acess server')
            } else if (error.response.status == 401) {
                setError ('Invalid credentials')
            }
        }
    }

    return(
        <div className="login">
            <div className="container">
                <img className="avatar_image" src={Avatar}></img>
                <div className="credentials">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email ID" 
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
                <div className="userPreference">
                    <div className="remember">
                        <input type="checkbox"  className="checkRememb" name="remember me" required></input>
                        <label htmlFor="checkRememb">Remember Me</label>
                    </div>
                    <a className="forgotPass" href="#">Forgot Password?</a>
                </div>
                <button 
                    type="submit" 
                    className="buttonLogin"
                    onClick={(e) => handleLogin(e)}
                >LOGIN</button>
                <p className='errorMessage'>{error}</p>
            </div>

        </div>
    );

}

export default Login;