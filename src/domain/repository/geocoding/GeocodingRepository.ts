import {
  GeoCoding,
  GeocodingQueryResult,
} from '@/domain/models/geocodingLocation/Geocoding'

export interface GeoCodingRepository {
  getQuerySearch: (location: string) => Promise<GeoCoding[]>
}
