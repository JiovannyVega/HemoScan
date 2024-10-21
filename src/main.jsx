import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="150287260322-vjq4kv5ppue2mfh9mum8vq1q6km88bip.apps.googleusercontent.com">
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>,
)
