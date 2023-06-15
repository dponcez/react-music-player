import React from 'react'
import { Main } from './components/Main/Main'
import { ThemeContextProvider } from './components/Context/Context'

const App = () => {
  return (
    <ThemeContextProvider>
      <Main/>
    </ThemeContextProvider>
  )
}

export { App }