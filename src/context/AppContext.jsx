import React, { createContext, useContext, useState, useEffect } from 'react'
import { demoData } from '../data/demoData'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [content, setContent] = useState(null)
    const [gallery, setGallery] = useState([])
    const [theme, setTheme] = useState({
          primary: '#d946ef',
          font: 'Inter',
    })
    const [social, setSocial] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
          // Simulate fetching data
                  setContent(demoData.content)
          setGallery(demoData.gallery)
          setSocial(demoData.social)

                  // Check if logged in in localStorage
                  const loggedIn = localStorage.getItem('artist_admin_logged_in') === 'true'
          setIsAdmin(loggedIn)
    }, [])

    const login = (password) => {
          if (password === 'admin123') { // Simple password for demo
            setIsAdmin(true)
                  localStorage.setItem('artist_admin_logged_in', 'true')
                  return true
          }
          return false
    }

    const logout = () => {
          setIsAdmin(false)
          localStorage.removeItem('artist_admin_logged_in')
    }

    const updateContent = (newContent) => setContent(pre => ({ ...pre, ...newContent }))
    const updateGallery = (newGallery) => setGallery(newGallery)
    const updateSocial = (newSocial) => setSocial(newSocial)
    const updateTheme = (newTheme) => setTheme(pre => ({ ...pre, ...newTheme }))

    return (
          <AppContext.Provider value={{
                  content,
                  gallery,
                  theme,
                  social,
                  isAdmin,
                  login,
                  logout,
                  updateContent,
                  updateGallery,
                  updateSocial,
                  updateTheme
          }}>
            {children}
          </AppContext.Provider>AppContext.Provider>
        )
}

export const useAppContext = () => useContext(AppContext)
