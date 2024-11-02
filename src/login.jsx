import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./AuthConfig";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const { instance, accounts, inProgress } = useMsal();
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = async () => {
        if (isLoggingIn) return; // Prevent multiple login attempts
        setIsLoggingIn(true);
        try {
            // Handle any existing redirect promise
            const result = await instance.handleRedirectPromise();

            if (result) {
                // We have a result, which means we've just returned from a redirect
                console.log('Returned from redirect. Access Token:', result.accessToken);
                navigate('/home');
            } else if (accounts.length > 0) {
                // We have an account, so we're already logged in
                console.log('Already logged in. Navigating to home.');
                navigate('/home');
            } else {
                // No result and no account, so we need to login
                console.log('Initiating login redirect');
                await instance.loginRedirect(loginRequest);
            }
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoggingIn(false);
        }
    };

    useEffect(() => {
        if (inProgress === 'none' && !isLoggingIn) {
            handleLogin();
        }
    }, [inProgress, isLoggingIn]);

    return (
        <div className="login-container">
            Authenticating...
        </div>
    );
};

export default Login;