import style from './Register.module.css'
import react, {useState} from 'react'
import axios from 'axios'

const Register = () => {

    const [name, setName] = useState('')
    const[email,setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPass, setConfirmPass]= useState('')
    const[error, setError] = useState('')
    
    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(name, email, password, confirmPass);

        try
        {   
            if(password != confirmPass)
            {
                setError('Passwords must be the same')
            }else{
                const response = await axios.post('http://localhost:3000/register',
                JSON.parse(JSON.stringify({name, email, password}))
                )
                setError('Successfully registred')
            }
            
        }catch(error){
            throw new Error(`Error fetching users: ${error.message}`);
        }
    }
    return(
        <div className={style.register}>
            <div className={style.container}>
                <h2>Register</h2>
                <div className={style.credentials}>
                    <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        ></input>
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
                        <input 
                            type="password" 
                            name="confirmPassword"
                            placeholder="Confirm password"
                            required
                            onChange={(e) => setConfirmPass(e.target.value)}
                        ></input>
                </div>
                <div className={style.buttons}>
                    <button 
                        type="submit" 
                        className={style.buttonRegister}
                        onClick={(e) => handleLogin(e)}
                    >REGISTER</button>
                     <p className={style.loginButton}>Already have an account? <a href="/Login">Sign up</a></p> 
                </div>
                <p className={style.errorMessage}>{error}</p>
            </div>

        </div>
    );
}

export default Register