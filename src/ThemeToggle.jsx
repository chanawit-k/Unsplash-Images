import { useGlobalContext } from './context'
import React from 'react'

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useGlobalContext()
  return <div>ThemeToggle</div>
}

export default ThemeToggle
