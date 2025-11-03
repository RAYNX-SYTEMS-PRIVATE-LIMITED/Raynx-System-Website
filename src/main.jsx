import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './style.css'
import './../public/css/styles.css';
import './../public/css/responsiveness.css';
import './../public/css/team_animations.css';
import './../public/css/footer_professional.css';
import './../public/css/mobileview_styles.css';
import './../public/css/components.css';


const container = document.getElementById('app')
createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter basename="/Raynx-System-Website/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
