import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Authprovider } from './context/auathcontext.tsx'
import { ServiceProvider} from './context/serviceContext.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BookingProvider } from './context/bookingContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='60011035406-5ljsr1dm4796vqk3bmvq5quigfd9agsc.apps.googleusercontent.com'>
    <ServiceProvider>
      <BookingProvider>
        <Authprovider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Authprovider>
    </BookingProvider>
    </ServiceProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)


