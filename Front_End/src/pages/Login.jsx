import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

function Login({ onSwitch }) {
    const navigate = useNavigate(); // Initialize the navigation function

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // 1. Here you would normally validate email/password with an API
        console.log("Logging in...");

        // 2. On Success: Redirect to Home
        navigate('/home'); 
    };

    return (
        <div className='Login_form'>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                
                <p className='Login_toggle_text' onClick={onSwitch}> 
                    I don't have an account... <strong>Sign Up</strong>
                </p>
            </form>
        </div>
    );
}

export default Login;