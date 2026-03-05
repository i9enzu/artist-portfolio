import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#27272a',
              color: '#fafafa',
              border: '1px solid #3f3f46',
            },
            success: {
              iconTheme: { primary: '#d946ef', secondary: '#fafafa' },
            },
          }}
        />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)
