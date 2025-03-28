import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme.js'

import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from '@mui/material/GlobalStyles'

// Cấu hình Redux store
import { Provider } from 'react-redux'

import { store } from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <GlobalStyles styles={{ //hiết lập CSS toàn cục, trong trường hợp này là bỏ gạch chân của thẻ a
          a: { textDecoration: 'none' }
        }} />
        <App />
        <CssBaseline />
        <ToastContainer position='bottom-left' autoClose={2000} />
      </CssVarsProvider>
    </Provider>
  </BrowserRouter>
)
