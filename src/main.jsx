import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource-variable/geologica';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
