import { CoordinateImpl } from '@/data/repository/CoordinateImpl'

interface GeolocationUsecase {
  getCurrentPosition(): Promise<GeolocationPosition>
}

class GetGeolocationCoord implements GeolocationUsecase {
  constructor(private geolocationRepository: CoordinateImpl) {}

  async getCurrentPosition(): Promise<GeolocationPosition> {
    return await this.geolocationRepository.getCurrentPosition()
  }
}
