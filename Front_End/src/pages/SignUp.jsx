import '../Styles/Login.css';

function SignUP({ onSwitch }) {
    return (
        <div className='Login_form'>
            <form onSubmit={(e) => e.preventDefault()}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Re-Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                
                <p className='Login_toggle_text' onClick={onSwitch} style={{cursor: 'pointer'}}> 
                    I already have an account ! Login ...
                </p>
            </form>
        </div>
    );
}

export default SignUP;