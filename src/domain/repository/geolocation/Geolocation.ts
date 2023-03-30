export interface GeolocationRepository {
  getCurrentPosition(): Promise<GeolocationPosition>
}
