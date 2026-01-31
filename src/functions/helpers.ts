export function toCardinalCoords(
  latitude: number,
  longitude: number,
  precision = 6
) {
  const latDirection = latitude >= 0 ? 'N' : 'S'
  const lonDirection = longitude >= 0 ? 'E' : 'W'

  return {
    latitude: `${Math.abs(latitude).toFixed(precision)}° ${latDirection}`,
    longitude: `${Math.abs(longitude).toFixed(precision)}° ${lonDirection}`,
  }
}
