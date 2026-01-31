import { View, ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useEffect, useRef } from 'react'
import { useLocation } from '../../hooks/useLocation'
import { colors } from '../../utils/colors'

export default function LiveLocationMap() {
  const { location, loading } = useLocation()
  const mapRef = useRef<MapView>(null)

  useEffect(() => {
    if (!location) return

    mapRef.current?.animateCamera(
      {
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        zoom: 17,
      },
      { duration: 500 }
    )
  }, [location])

  if (loading || !location) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <MapView
      ref={mapRef}
      style={{ height: 400 }}
      showsUserLocation
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      <Marker
      pinColor={colors.primary}
        coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
      />
    </MapView>
  )
}
