import { QueryLocation } from '@/domain/models/resourceLocation'

export interface ResourceLocationRepository {
  getResourceLocations: (location: string) => Promise<QueryLocation>
}
