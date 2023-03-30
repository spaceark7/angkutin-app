import { createTheme } from '@mui/material'
import '@fontsource/hanken-grotesk/100.css'
import '@fontsource/hanken-grotesk/200.css'
import '@fontsource/hanken-grotesk/300.css'
import '@fontsource/hanken-grotesk/400.css'
import '@fontsource/hanken-grotesk/500.css'
import '@fontsource/hanken-grotesk/600.css'
import '@fontsource/hanken-grotesk/700.css'
import '@fontsource/hanken-grotesk/800.css'
import '@fontsource/hanken-grotesk/900.css'
const rootElement = document.getElementById('root')

export const themes = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#3a115e',
    },
    secondary: {
      main: '#04A777',
    },
    error: {
      main: '#D62828',
    },
    warning: {
      main: '#FB8B24',
    },
    info: {
      main: '#007991',
    },
    success: {
      main: '#0A8754',
    },
  },
  typography: {
    fontFamily: 'Hanken Grotesk',
  },
  shape: {
    borderRadius: 4,
  },
})
