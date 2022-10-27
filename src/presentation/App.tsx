import { ThemeProvider } from '../app/Context/ThemeContext'
import { UserProvider } from '../app/Context/UserContext'
import useTheme from '../app/hooks/useTheme'
import useUser from '../app/hooks/useUser'
import AppRoute from './Route'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [user, toggleUser] = useUser()

  return <main className={theme === 'light' ? '' : 'bg-gray-900 text-white'}>
    <ThemeProvider value={{theme, toggleTheme}}><UserProvider value={{user, toggleUser}}><AppRoute/></UserProvider></ThemeProvider>
  </main>
}
