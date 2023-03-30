import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navigation/NavBar'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

const props: Props = {
  window: () => window,
  children: React.createElement(React.Fragment),
}
const RootLayout = () => {
  return (
    <div>
      <NavBar {...props} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
