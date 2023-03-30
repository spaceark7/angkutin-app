import { GeolocationRepository } from '@/domain/repository/geolocation/Geolocation'

export class CoordinateImpl implements GeolocationRepository {
  constructor() {}

  async getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }
}
