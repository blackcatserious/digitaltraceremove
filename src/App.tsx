import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { LanguageLayout } from './components/LanguageLayout'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/:lang/*" element={<LanguageLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
