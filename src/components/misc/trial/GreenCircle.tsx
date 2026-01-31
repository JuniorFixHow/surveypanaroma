import { FontAwesome6 } from '@expo/vector-icons'
import { View } from 'react-native'

const GreenCircle = () => {
  return (
    <View className='w-24 h-24 shadow flex items-center justify-center rounded-full bg-linear-to-r from-[#4ADE80] to-[#10B981]' >
      <FontAwesome6 name="check" size={24} color="white" />
    </View>
  )
}

export default GreenCircle