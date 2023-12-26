import { useGlobalContext } from './context'
import React from 'react'
import { CiDark, CiSun } from 'react-icons/ci'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button className="dark-toggle">
        {isDarkTheme ? (
          <CiDark onClick={toggleDarkTheme} className="toggle-icon" />
        ) : (
          <CiSun onClick={toggleDarkTheme} className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle
