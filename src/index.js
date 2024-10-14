import React from 'react';
import ReactDOM from 'react-dom';
import './styles/colors.css'; // Asegúrate de que esta ruta sea correcta
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
    <GoogleOAuthProvider clientId="150287260322-vjq4kv5ppue2mfh9mum8vq1q6km88bip.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root') // Mueve esta línea fuera del GoogleOAuthProvider
);