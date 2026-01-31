import { useState } from 'react'
import { Dimensions } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  } from 'react-native-reanimated'

import MainContainer from '../components/shared/MainContainer'
import { styles } from '../utils/styles'
import ScreenOne from '../components/Views/Home/ScreenOne'
import ScreenTwo from '../components/Views/Home/ScreenTwo'
import ScreenThree from '../components/Views/Home/ScreenThree'
import { scheduleOnRN } from 'react-native-worklets'

const { width } = Dimensions.get('window')
const SWIPE_THRESHOLD = width * 0.25

export default function Home() {
  const [page, setPage] = useState(1)
  const translateX = useSharedValue(0)

  const goToPage = (next: number) => {
    setPage(Math.min(3, Math.max(1, next)))
  }

  const pan = Gesture.Pan()
    .onUpdate(e => {
      // 🚫 Block backward swipe on ScreenOne
      if (page === 1 && e.translationX > 0) return

      // 🚫 Block forward swipe on ScreenThree
      if (page === 3 && e.translationX < 0) return

      translateX.value = e.translationX
    })
    .onEnd(e => {
        if (e.translationX > SWIPE_THRESHOLD && page > 1) {
            scheduleOnRN(goToPage, page - 1)
        }

        if (e.translationX < -SWIPE_THRESHOLD && page < 3) {
            scheduleOnRN(goToPage, page + 1)
        }

        translateX.value = withSpring(0)
    })



  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <MainContainer className={styles.main}>
      <GestureDetector gesture={pan}>
        <Animated.View style={[{ flex: 1 }, animatedStyle]}>
          {page === 1 && <ScreenOne setPage={setPage} />}
          {page === 2 && <ScreenTwo setPage={setPage} />}
          {page === 3 && <ScreenThree  />}
        </Animated.View>
      </GestureDetector>
    </MainContainer>
  )
}
