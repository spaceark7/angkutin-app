import {
  GeoCoding,
  GeocodingQueryResult,
  createGeoCodingFromJson,
} from '@/domain/models/geocodingLocation/Geocoding'
import { GeoCodingRepository } from '@/domain/repository/geocoding/GeocodingRepository'
import MapBoxApi from '../services/mapboxApi'

const map_box_service = new MapBoxApi()
export default class GeoCodingImpl implements GeoCodingRepository {
  private readonly apiService: MapBoxApi

  constructor(service = map_box_service) {
    this.apiService = service
  }

  getQuerySearch = async (params: string): Promise<GeoCoding[]> => {
    const response = await this.apiService.get<GeocodingQueryResult>(params)
    return createGeoCodingFromJson(response.features)
  }
}
