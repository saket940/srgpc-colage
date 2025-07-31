import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   </StrictMode>,
)
if(localStorage.q ==null){
  localStorage.setItem("q","0")
}


