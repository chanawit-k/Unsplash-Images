import { useGlobalContext } from './context'
import React from 'react'
import { CiDark, CiSun } from 'react-icons/ci'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <body className={isDarkTheme && 'dark-theme'}>
      {isDarkTheme ? (
        <CiDark onClick={toggleDarkTheme} />
      ) : (
        <CiSun onClick={toggleDarkTheme} />
      )}
    </body>
  )
}

export default ThemeToggle
