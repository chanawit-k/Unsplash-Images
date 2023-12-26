import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ProviderContext from './context'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderContext>
    <App />
  </ProviderContext>
)
