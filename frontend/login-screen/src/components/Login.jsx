import Avatar from '/src/assets/Avatar.png'

function Login(){
    return(
        <div className="login">
            <div className="container">
                <img className="avatar_image" src={Avatar}></img>
                <div className="credentials">
                        <input name="email" placeholder="Email ID" required></input>
                        <input name="password" placeholder="Password"></input>
                </div>
                <div className="userPreference">
                    <div className="remember">
                        <input className="checkRememb" type="checkbox" name="remember me" required></input>
                        <label for="checkRememb">Remember Me</label>
                    </div>
                    <a className="forgotPass" href="#">Forgot Password?</a>
                </div>
                <button className="buttonLogin">LOGIN</button>

            </div>

        </div>
    );

}

export default Login;