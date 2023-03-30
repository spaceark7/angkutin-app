export interface QueryLocation {
  estimatedTotal: number
  resources: Resource[]
}

export interface Resource {
  __type: string
  bbox: number[]
  name: string
  point: Point
  address: Address
  confidence: string
  entityType: string
  geocodePoints: GeocodePoint[]
  matchCodes: string[]
}

export interface Address {
  adminDistrict: string
  adminDistrict2: string
  countryRegion: string
  formattedAddress: string
  locality?: string
}

export interface GeocodePoint {
  type: string
  coordinates: number[]
  calculationMethod: string
  usageTypes: string[]
}

export interface Point {
  type: string
  coordinates: number[]
}
