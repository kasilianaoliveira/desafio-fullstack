import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'
function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="inse-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | INSE" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
