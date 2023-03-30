export interface UserRepository {
  getUserCoordinate(): Promise<GeolocationCoordinates>
  getUserLocation(): Promise<GeolocationPosition>
}
