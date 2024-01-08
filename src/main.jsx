import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import SetRoutes from './jsx/routes/SetRoutes';
// import App from './App.jsx'
// import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
   <SetRoutes />
  </React.StrictMode>
  </BrowserRouter>
)
