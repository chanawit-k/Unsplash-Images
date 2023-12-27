import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('darkTheme')

  if (storedDarkMode === null) {
    return prefersDarkMode
  }

  return storedDarkMode === 'true'
}

const ProviderContext = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchParam, setSearchParam] = useState('cat')

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    localStorage.setItem('darkTheme', newTheme)
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchParam, setSearchParam }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
export default ProviderContext
