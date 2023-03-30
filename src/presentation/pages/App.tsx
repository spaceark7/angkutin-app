import { Button } from '@mui/material'
import { GetUserLocation } from '../hooks/GetUserLocation'

function App() {
  const { latitude, longitude, error } = GetUserLocation()
  const getLocation = () => {
    console.log(latitude, longitude, error)
  }
  return (
    <div className='App'>
      <h1>React + MUI + TypeScript</h1>
      <Button onClick={getLocation}>Get Location</Button>
    </div>
  )
}

export default App
