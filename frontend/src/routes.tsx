import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Schools } from './pages/app/schools/schools'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'inse/resultados',
        element: <Schools />,
      },
    ],
  },
])
