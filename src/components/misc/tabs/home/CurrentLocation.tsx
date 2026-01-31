import { Entypo, FontAwesome6 } from '@expo/vector-icons'
import { View, Text } from 'react-native'

const CurrentLocation = () => {
  return (
    <View className='w-full p-3 flex flex-col gap-0.5 rounded-lg bg-white/10' >
      <View className='flex flex-row items-center gap-0.5' >
        <Entypo name="location-pin" size={24} color="#86EFAC" />
        <Text className='text-white tracking-wider' >Current Location</Text>
      </View>
      <View className='flex flex-row items-center gap-0.5' >
        <Text className='text-white tracking-wider text-xs' >GPS Active</Text>
        <Entypo name="dot-single" size={24} color="white" />
        <Text className='text-white tracking-wider text-xs' >Accuracy: </Text>
        <View className='flex flex-row items-center gap-0.5' >
            <FontAwesome6 name="plus-minus" size={10} color="white" />
            <Text className='text-white tracking-wider text-xs' >3</Text>
        </View>
      </View>
    </View>
  )
}

export default CurrentLocation