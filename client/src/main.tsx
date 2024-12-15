import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AuthContextProvider } from './context/authcontext.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  </AuthContextProvider>
)
