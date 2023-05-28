import './App.css'
import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'
import SwitchMode from './components/SwitchMode.jsx'
import Home from './pages/Home'
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom'
import Gallery from './pages/Gallery'

function App() {
  const [mode, setMode] = useState(false)

  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: mode ? 'dark' : 'light'
    }
  }), [mode])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='nav-container'>
            <nav>
              <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Home
              </NavLink>
              <NavLink
                to={'/gallery'}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Gallery
              </NavLink>
            </nav>
            <SwitchMode setMode={setMode} mode={mode} />
          </div>
          <main className='main'>
            <Outlet />
          </main>
        </ThemeProvider>
      </>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/gallery',
          element: <Gallery />
        },
        {
          path: '*',
          element: <h1>404</h1>
        }
      ]
    }
  ])

  return (

    <RouterProvider router={router} />

  )
}

export default App