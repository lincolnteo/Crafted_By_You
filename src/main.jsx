import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import QuotePage from './Components/QuotePage.jsx'
import WorkshopsPage from './Components/WorkshopsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
