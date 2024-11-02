import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState();
    const [accessToken, setAccessToken] = useState();
    return (
        <AuthContext.Provider value={{ data, setData, accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;