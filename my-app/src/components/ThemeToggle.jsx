import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle({ className }) {
  const { theme, toggle } = useTheme()

  return (
    <button onClick={toggle} className={className} aria-pressed={theme === 'dark'} aria-label="Toggle theme">
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
