import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './style.css'
import './assets/css/styles.css'
import './assets/css/responsiveness.css'
import './assets/css/team_animations.css'
import './assets/css/footer_professional.css'
import './assets/css/mobileview_styles.css'
import './assets/css/components.css'


const container = document.getElementById('app')
createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
