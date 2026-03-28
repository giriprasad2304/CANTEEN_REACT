import '../Styles/Login.css';

function Login({ onSwitch }) {
    return (
        <div className='Login_form'>
            <form onSubmit={(e) => e.preventDefault()}>
                <h3>Login</h3>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                
                <p className='Login_toggle_text' onClick={onSwitch} style={{cursor: 'pointer'}}> 
                    I don't have an account ? Sign Up ...
                </p>
            </form>
        </div>
    );
}
export default Login;