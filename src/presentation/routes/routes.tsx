import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/Home'

interface Props {
  window?: () => Window
  children: React.ReactElement
}
const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: '/',
        name: 'Home',
        element: <HomePage />,
      },
      {
        path: 'about',
        name: 'About',
        element: <div>About</div>,
      },
      {
        path: 'contact',
        name: 'Contact',
        element: <div>Contact</div>,
      },
    ],
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
]

export default routes
