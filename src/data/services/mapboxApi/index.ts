import { handleAxiosError } from '@/utils/api/ErrorHandleResponse'
import axios, { AxiosError } from 'axios'

const access_token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
const base_url = import.meta.env.VITE_MAPBOX_BASE_URL

export default class MapBoxApi {
  constructor(
    readonly _accessToken = access_token,
    readonly _baseUrl = base_url
  ) {}

  public async get<GeocodingQueryResult>(
    query: string
  ): Promise<GeocodingQueryResult> {
    const url = `${this._baseUrl}geocoding/v5/mapbox.places/${encodeURI(
      query
    )}.json?country=id&limit=10&language=id&autocomplete=true&access_token=${
      this._accessToken
    }`
    try {
      const response = await axios.get<GeocodingQueryResult>(url)
      return response.data
    } catch (error) {
      handleAxiosError(error)
      throw error
    }
  }
}
