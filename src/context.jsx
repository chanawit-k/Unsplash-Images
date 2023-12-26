import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const initailState = {
  cart: new Map(),
  loading: false,
}

const ProviderContext = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', !isDarkTheme)
  }
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
export default ProviderContext
