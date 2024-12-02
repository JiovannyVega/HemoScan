import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { getToken, handleGoogleLogin, handleEmailLogin, handleLogout, isLoggedIn } from './authFunctions'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    return (
        <AuthContext.Provider value={{
            handleGoogleLogin: (googleToken) => handleGoogleLogin(googleToken, setError, navigate),
            handleEmailLogin: (email, password) => handleEmailLogin(email, password, setError, navigate),
            handleLogout: () => handleLogout(navigate),
            error,
            getToken,
            isLoggedIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const useAuth = () => {
    return useContext(AuthContext)
}