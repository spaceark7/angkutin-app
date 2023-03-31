import { QueryLocation } from '@/domain/models/resourceLocation'
import { ResourceLocationRepository } from '@/domain/repository/resourceLocation'
import { Api } from '../services/api'

export class ResourceLocationImpl implements ResourceLocationRepository {
  private apiService: Api
  constructor(service: Api) {
    this.apiService = service
  }

  getResourceLocations = async (params: string): Promise<QueryLocation> => {
    const response = await this.apiService.get<any>(
      `/Locations?countryRegion=ID&locality=ID&addressLine=${encodeURI(
        params
      )}&includeNeighborhood=1&maxResults=5`
    )
    return response.resourceSets[0]
  }
}
