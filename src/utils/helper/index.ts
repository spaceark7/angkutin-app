export const getLocation = () => {
  let latitude: number
  let longitude: number
  let errorMessage: string | null
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude = position.coords.latitude
        longitude = position.coords.longitude

        return { latitude, longitude, errorMessage }
      },
      (error) => {
        return (errorMessage = error.message || null)
      }
    )
  } else {
    console.log('Geolocation is not supported by this browser.')
  }
}
