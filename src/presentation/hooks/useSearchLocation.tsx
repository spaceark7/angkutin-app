import GeoCodingImpl from '@/data/repository/GeocodingImpl'
import { ResourceLocationImpl } from '@/data/repository/resourceLocationImpl'
import { Api } from '@/data/services/api'
import { GeoCoding } from '@/domain/models/geocodingLocation/Geocoding'
import { QueryLocation, Resource } from '@/domain/models/resourceLocation'
import { debounce } from '@mui/material'

import { useEffect, useMemo, useState } from 'react'

interface Request {
  input: string
}

const useSearchLocation = () => {
  const [search, setSearch] = useState<GeoCoding | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [suggestion, setSuggestion] = useState<GeoCoding[]>([])

  const searchService = new GeoCodingImpl()
  const fetchLocation = useMemo(
    () =>
      debounce(
        (
          request: { input: Request['input'] },
          callback: (response?: Promise<GeoCoding[]>) => void
        ) => {
          callback(searchService.getQuerySearch(request.input))
        },
        1000
      ),
    []
  )

  useEffect(() => {
    if (inputValue === '') {
      setSuggestion([])
    } else {
      fetchLocation(
        { input: inputValue },
        async (response?: Promise<GeoCoding[]>) => {
          const results = await response

          let newSuggestions: GeoCoding[] = []

          console.log('response', results)
          console.log('inputValue', inputValue)

          if (search) {
            console.log('search', search)
            newSuggestions = [search]
          }

          if (results && results.length > 0) {
            newSuggestions = [...results, ...newSuggestions]
          }
          setSuggestion(newSuggestions)
        }
      )
    }
  }, [inputValue, fetchLocation])

  /*
  const service = new Api()
  const searchService = new ResourceLocationImpl(service)

  const fetchLocation = useMemo(
    () =>
      debounce(
        (
          request: { input: Request['input'] },
          callback: (response?: Promise<QueryLocation>) => void
        ) => {
          searchService.getResourceLocations(request.input)
          console.log(
            callback(searchService.getResourceLocations(request.input))
          )
        },
        1000
      ),
    []
  )

  useEffect(() => {
    if (inputValue === '') {
      setSuggestion(search ? [search] : [])
    }

    fetchLocation(
      { input: inputValue },
      async (response?: Promise<QueryLocation>) => {
        const results = await response

        let newSuggestions: Resource[] = []
        console.log('response', results)
        console.log('inputValue', inputValue)
        if (search) {
          newSuggestions = [search]
        }

        // if (results && results.length > 0) {
        //   newSuggestions = [results, ...other]
        //   console.log(newSuggestSuggest    }
        if (results) {
          const resources = results?.resources
          console.log('resources', resources)
          newSuggestions = [...resources, ...newSuggestions]
        }
        setSuggestion(newSuggestions)
      }
    )
  }, [inputValue, search, fetchLocation])

  */

  return {
    search,
    setSearch,
    inputValue,
    setInputValue,
    suggestion,
    setSuggestion,
  }
}

export default useSearchLocation
