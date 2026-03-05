import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AdminLogin from './admin/AdminLogin'
import AdminLayout from './admin/AdminLayout'
import Dashboard from './admin/pages/Dashboard'
import ContentEditor from './admin/pages/ContentEditor'
import GalleryManager from './admin/pages/GalleryManager'
import ThemeControl from './admin/pages/ThemeControl'
import SocialControl from './admin/pages/SocialControl'
import DevTools from './admin/pages/DevTools'
import { useAppContext } from './context/AppContext'

function App() {
    const { isAdmin } = useAppContext()

  return (
        <Router>
              <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/admin/login" element={<AdminLogin />} />
                      
                {/* Admin Routes */}
                      <Route path="/admin" element={isAdmin ? <AdminLayout /> : <Navigate to="/admin/login" />}>
                                <Route index element={<Dashboard />} />
                                <Route path="content" element={<ContentEditor />} />
                                <Route path="gallery" element={<GalleryManager />} />
                                <Route path="theme" element={<ThemeControl />} />
                                <Route path="social" element={<SocialControl />} />
                                <Route path="dev" element={<DevTools />} />
                      </Route>Route>
              </Routes>Routes>
        </Router>Router>
      )
}

export default App</Router>
