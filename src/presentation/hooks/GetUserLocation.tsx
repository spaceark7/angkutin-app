import React, { useCallback, useEffect, useState } from 'react'

export const GetUserLocation = () => {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function getLocationOnClick(): Promise<void> {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by your browser'))
          } else {
            navigator.geolocation.getCurrentPosition(
              (position) => resolve(position),
              (error) => {
                setError(error.message)
                reject(error.message)
              },
              { enableHighAccuracy: true }
            )
          }
        }
      )

      // Code to handle the position data
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      setError(null)
    } catch (error) {
      // setError(error.message || null)
      console.error('Error getting location:', error)
    }
  }

  return {
    latitude,
    longitude,
    error,

    getLocationOnClick,
  }
}
