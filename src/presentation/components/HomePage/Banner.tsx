import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import TabsMenu from './TabsMenu'

function Banner() {
  return (
    <Box className='w-full bg-no-repeat bg-hero-banner bg-cover bg-right min-h-screen px-8 py-12'>
      <Box className='bg-white max-w-md p-4'>
        <Typography variant='h6' className='font-light mb-2'>
          How can we help you, today?
        </Typography>
        <TabsMenu />
      </Box>
    </Box>
  )
}

export default Banner
