import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { getToken, handleGoogleLogin, handleEmailLogin, handleLogout, isLoggedIn, handleSignup } from './authFunctions'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    return (
        <AuthContext.Provider value={{
            handleGoogleLogin: (googleToken) => handleGoogleLogin(googleToken, setError, navigate),
            handleEmailLogin: (email, constrasena) => handleEmailLogin(email, constrasena, setError, navigate),
            handleLogout: () => handleLogout(navigate),
            handleSignup: (formData) => handleSignup(formData, setError, navigate),
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

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}