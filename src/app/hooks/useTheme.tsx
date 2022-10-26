import { useEffect, useState } from 'react'

export default function useTheme() {
    const themeLocalStorageName = `theme`
    const [theme, setTheme] = useState<string>(localStorage.getItem(themeLocalStorageName) || 'light')

    function toggleTheme(){        
        setTheme((prevState : string) => prevState === 'light' ? 'dark' : 'light')
        localStorage.setItem(themeLocalStorageName, theme === 'light' ? 'dark' : 'light')
    }

  return [theme, toggleTheme]
}