import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useToast } from "@juniorfixhow/react-native-toast";

export function useLocation() {
    const {showToast} = useToast();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
//   const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let sub: Location.LocationSubscription | null = null;

    (async () => {
      const { status } =
        await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        showToast({
            message: 'Permission to access location was denied',
            type: 'error',
            position: 'top',
            timeout: 3000,
        })
        setLoading(false)
        return
      }

      sub = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        setLocation
      )
      setLoading(false)
    })()

    return () => sub?.remove()
  }, [])

  return { location, loading }
}
