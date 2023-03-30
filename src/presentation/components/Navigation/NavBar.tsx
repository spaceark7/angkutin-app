import { Menu } from '@mui/icons-material'
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import {
  AppBar,
  Box,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import React from 'react'
import routes from '@/presentation/routes/routes'

import { Link, useNavigate } from 'react-router-dom'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

const drawerWidth = 240

const HideOnScroll = (props: any) => {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

const NavBar = (props: Props) => {
  const { window } = props
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const onNavigate = (path: string) => {
    navigate(path)
    handleDrawerToggle()
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {routes[0].children?.map((item) => (
          <ListItem
            component={Link}
            to={item.path}
            key={item.name}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position='sticky' component={'nav'} className='bg-black '>
          <Toolbar>
            <IconButton
              color='inherit'
              className='shadow-md'
              aria-label='open drawer'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, borderRadius: '10%' }}
            >
              <Menu />
            </IconButton>

            <Typography
              variant='h6'
              className='font-light flex-1'
              component='div'
            >
              Moovin'
              <strong className=' font-bold  text-cyan-500 text-xl'>
                {' '}
                Service
              </strong>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {routes[0].children?.map((item: any) => (
                <Button
                  component={Link}
                  to={item.path}
                  key={item.name}
                  color='inherit'
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Box component={'nav'}>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default NavBar
