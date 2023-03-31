interface GeoCodingContext {
  id: string
  short_code: string
  wikidata: string
  mapbox_id: string
  text_id: string
  language_id: string
  text: string
  language: string
}

interface GeocodingQueryResult {
  type: string
  query: string[]
  features: GeoCoding[]
  attribution: string
}

interface GeoCodingGeometry {
  type: string
  coordinates: [number, number]
}

interface GeoCoding {
  id: string
  type: string
  place_type: string[]
  relevance: number
  properties: {
    wikidata: string
    mapbox_id: string
  }
  text_id: string
  language_id: string
  place_name_id: string
  text: string
  language: string
  place_name: string
  bbox: [number, number, number, number]
  center: [number, number]
  geometry: GeoCodingGeometry
  context: GeoCodingContext[]
}

interface GeoJSON {
  geoCodings: GeoCoding[]
}

export function createGeoCodingFromJson(json: GeoCoding[]): GeoCoding[] {
  const geoCodings: GeoCoding[] = json.map((geoCoding) => geoCoding)
  return geoCodings
}

export type { GeoCoding, GeoJSON, GeocodingQueryResult }
