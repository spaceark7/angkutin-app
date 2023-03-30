// create api class following clean architecture using axios
// this class will be used to call api

import axios from 'axios'
const baseUrl = import.meta.env.VITE_BING_MAPS_BASE_URL as string
const apiKey = import.meta.env.VITE_BING_MAPS_API_KEY as string

class Api {
  private baseUrl: string

  constructor() {
    this.baseUrl = baseUrl
  }

  public async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(`${this.baseUrl}${url}`)
    return response.data
  }
}
