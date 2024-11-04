import { useState, useEffect } from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const useGoogleAuth = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem('profile')
    return savedProfile ? JSON.parse(savedProfile) : null
  })

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const response = await axios.post('http://localhost:3000/login/google', {
          token: codeResponse.access_token
        })
        setUser(response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        setProfile(response.data.user)
        localStorage.setItem('profile', JSON.stringify(response.data.user))
      } catch (error) {
        console.error('Error al iniciar sesión con Google:', error)
      }
    },
    onError: (error) => console.log('Login Failed:', error),
  })

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data)
          localStorage.setItem('profile', JSON.stringify(res.data))
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }
  }, [user])

  const logOut = () => {
    googleLogout()
    setUser(null)
    setProfile(null)
    localStorage.removeItem('user')
    localStorage.removeItem('profile')
  }

  return { profile, login, logOut }
}

export default useGoogleAuth
