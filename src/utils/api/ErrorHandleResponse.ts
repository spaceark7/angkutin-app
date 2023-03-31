export function handleAxiosError(error: any) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('Response error', error.response.status, error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    console.log('Request error', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('General error', error.message)
  }
}
