import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  <CssVarsProvider theme={theme}>
    <App />
    <CssBaseline />
    <ToastContainer position='bottom-left' autoClose={2000} />
  </CssVarsProvider>
)
