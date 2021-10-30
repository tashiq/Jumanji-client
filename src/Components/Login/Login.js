import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth'
const Login = () => {

    const location = useLocation();
    const history = useHistory();
    console.log(location);
    const { signIn, user } = useAuth();
    const whereTo = location.state?.from.pathname || '/home';
    if (user.email) {
        history.push(whereTo)
    }
    if (user)
        return (
            <div className="d-flex flex-column align-items-center justify-content-center mt-5 pt-5">
                <h3 className="text-info">Please Log In / Sign In</h3>
                <button onClick={signIn} className="btn btn-warning my-4 border">Sign In Using Google</button>
            </div>
        );
};

export default Login;