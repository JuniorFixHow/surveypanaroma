import { View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const LiveAddress = () => {
  return (
    <View className='flex w-full flex-col gap-2 bg-white p-4 rounded-lg border border-[#F3F4F6]' >
      <View className='flex flex-row items-center gap-1.5' >
        <View  className='flex rounded-lg h-11 w-11 items-center justify-center bg-[#DBEAFE]' >
           <FontAwesome5 name="map-pin" size={18} color="black" />
        </View>
        <View className='flex flex-col gap-0.5' >
            <Text className='text-[#1F2937] font-semibold tracking-wider' >Address</Text>
            <Text className='text-[#1F2937] tracking-wider text-xs' >Approximate location</Text>
        </View>
      </View>
      <Text className='text-[#1F2937] tracking-wider text-xs' >Independence Avenue, Accra Central, Greater Accra Region, Ghana</Text>
    </View>
  )
}

export default LiveAddress