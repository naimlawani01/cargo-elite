import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import App from './App.jsx'
import './index.css'
import './i18n' // Import i18n configuration

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
