import style from './Register.module.css'
import react, {useState} from 'react'
import axios from 'axios'

const Register = () => {

const [name, setName] = useState('')
const[email,setEmail] = useState('')
const[pass, setPass] = useState('')
const[confirmPass, setConfirmPass]= useState('')
const[user, setUser] = useState (null)

const handleLogin = async (e) => {
    e.preventDefault();

    console.log(name, email, pass, confirmPass);

    const response = await axios.post('http://localhost:3000/register',
    JSON.parse(JSON.stringify({name,email, pass}))
    )

    setUser(response.data)
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
                            onChange={(e) => setPass(e.target.value)}
                        ></input>
                        <input 
                            type="password" 
                            name="confirmPassword"
                            placeholder="Confirm password"
                            required
                            onChange={(e) => setConfirmPass(e.target.value)}
                        ></input>
                </div>
                <div className={style.btn}>
                <button 
                    type="submit" 
                    className={style.buttonRegister}
                    onClick={(e) => handleLogin(e)}
                >REGISTER</button>
                </div>
                
            </div>

        </div>
    );
}

export default Register