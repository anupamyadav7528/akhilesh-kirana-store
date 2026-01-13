import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // यहाँ App होना चाहिए
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* यहाँ भी App होना चाहिए */}
  </React.StrictMode>,
)