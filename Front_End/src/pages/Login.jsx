import { useState } from 'react';
import '../Styles/Login.css';

function Login()
{
    const[IsLogin , SetIsLogin] = useState(true);

    const handleLogin = () =>{
        SetIsLogin(!IsLogin)
    }

    return(
        <>
            <div className='Login_form'>
                <form >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        {IsLogin ? "Login" : "Sign Up"}
                    </button>
                    <p className='Login_toggle_text' onClick={handleLogin}> 
                        {IsLogin ? "I dont have a account .." : "I already have a account"}
                    </p>
                </form>
            </div>
            
        </>
    )
}
export default Login;