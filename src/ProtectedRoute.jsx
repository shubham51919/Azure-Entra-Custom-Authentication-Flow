import { Navigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

function ProtectedRoute({ children }) {
    const { accounts } = useMsal();
    // Check if the user is authenticated by checking the access token in session storage
    const isAuthenticated = accounts && accounts.length > 0;
    // Redirect to page based on the selectedPageIndex
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }
    return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute;