import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider } from './context/TheemContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router >
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>,
)
