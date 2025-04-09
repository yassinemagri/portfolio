import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./components/theme-provider"
import I18nProvider from "./components/i18n-provider"


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
      <I18nProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <App />
        </ThemeProvider>
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>,
)

