import {
  DirectionsCarFilled,
  GpsFixed,
  Hail,
  LocalShipping,
} from '@mui/icons-material'
import {
  Alert,
  AlertTitle,
  Box,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Tab,
  Tabs,
  TextField,
} from '@mui/material'
import React, { useEffect } from 'react'
import { TabPanel } from '@presentation/components/HomePage/TabPanel'
import { GetUserLocation } from '@/presentation/hooks/GetUserLocation'
import ErrorAlert from '../common/ErrorAlert'

const TabsMenu = () => {
  const [value, setValue] = React.useState(0)
  const [fromAddress, setFromAddress] = React.useState('')
  const [toAddress, setToAddress] = React.useState('')
  const allyProps = (index: number) => {
    return {
      id: `menu-tab-${index}`,
      'aria-controls': `menu-tabpanel-${index}`,
    }
  }
  const { latitude, longitude, error, getLocationOnClick } = GetUserLocation()

  const handleLocation = async () => {
    await getLocationOnClick()
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (latitude && longitude) {
      setToAddress(`${longitude}, ${latitude}`)
    }
  }, [latitude, longitude])
  return (
    <>
      <Box
        className='border border-b border-gray-400'
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        {error && <ErrorAlert message={error} />}
        <Tabs
          indicatorColor='primary'
          value={value}
          onChange={handleChange}
          aria-label='icon label tabs example'
          variant='fullWidth'
        >
          <Tab icon={<LocalShipping />} label='Delivery' {...allyProps(0)} />
          <Tab icon={<DirectionsCarFilled />} label='Ride' {...allyProps(1)} />
          <Tab icon={<Hail />} label='Moving' {...allyProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box className='flex flex-col gap-y-4'>
          <FormControl component='div' variant='filled'>
            <InputLabel htmlFor='filled-adornment-location'>
              Where to?
            </InputLabel>
            <FilledInput
              id='filled-adornment-location'
              endAdornment={
                <InputAdornment component='div' position='end'>
                  <IconButton
                    onClick={handleLocation}
                    aria-label='get user location'
                    edge='end'
                  >
                    <GpsFixed />
                  </IconButton>
                </InputAdornment>
              }
              aria-describedby='location-helper-text'
              inputProps={{
                'aria-label': 'location',
              }}
              className='w-full'
              value={toAddress}
              onChange={(e) => setToAddress(e.target.value)}
            />
            <FormHelperText id='filled-weight-helper-text'>
              Allow us to access location
            </FormHelperText>
          </FormControl>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField
          variant='filled'
          type='search'
          label='Destination'
          className='w-full'
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField
          variant='filled'
          type='search'
          label='Location'
          className='w-full'
        />
      </TabPanel>
    </>
  )
}

export default TabsMenu
