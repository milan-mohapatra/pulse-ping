import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme.ts'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
)