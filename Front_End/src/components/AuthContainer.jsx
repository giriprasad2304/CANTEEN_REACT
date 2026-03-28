import { useState } from 'react';
import Login from '../pages/Login';
import SignUP from '../pages/SignUp';

function AuthContainer() {
    const [isLoginView, setIsLoginView] = useState(true);

    // Function to toggle the state
    const toggleView = () => setIsLoginView(!isLoginView);

    return (
        <div className="auth-wrapper">
            {isLoginView ? (
                <Login onSwitch={toggleView} />
            ) : (
                <SignUP onSwitch={toggleView} />
            )}
        </div>
    );
}

export default AuthContainer;