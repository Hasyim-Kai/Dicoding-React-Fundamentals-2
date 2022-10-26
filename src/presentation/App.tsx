import { ThemeProvider } from '../app/Context/Themecontext'
import useTheme from '../app/hooks/useTheme'
import AppRoute from './Route'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return <main className={theme === 'light' ? '' : 'bg-gray-900 text-white'}>
    <ThemeProvider value={{theme, toggleTheme}}><AppRoute/></ThemeProvider>    
  </main>
}
