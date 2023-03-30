interface Coordinate {
  origin: LatLng
  destination: LatLng
  distance: number
}

export interface LatLng {
  lat: number
  lng: number
}

export const createCoordinateFromJson = (json: any): Coordinate => {
  return {
    origin: json.origin,
    destination: json.destination,
    distance: json.distance,
  }
}

export default Coordinate
