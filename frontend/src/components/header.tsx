import { Separator } from '@radix-ui/react-separator'
import { FileSpreadsheet, Home, LibraryBig } from 'lucide-react'

import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
export const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <LibraryBig className="h-6 w-6 text-teal-900 dark:text-teal-700" />
        <Separator orientation="vertical" className="h-5" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink to="/inse/resultados">
            <FileSpreadsheet className="h-4 w-4" />
            INSE - Resultados
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
