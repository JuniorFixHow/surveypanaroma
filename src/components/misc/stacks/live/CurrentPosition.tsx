import { View, Text, TouchableOpacity } from 'react-native'
import IconBox from './IconBox'
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons'

const CurrentPosition = () => {
  return (
    <View className='flex flex-col rounded-lg p-4 bg-linear-to-b from-[#EFF6FF] via-[#EEF2FF] to-[#EEF2FF]' >
      <View className='flex flex-row items-center justify-between' >
        <Text className='text-[#111827] font-semibold tracking-wide text-lg' >Current Position</Text>
        <View className='bg-[#DCFCE7] px-2 py-1' >
            <Text className='text-[#15803D] text-sm tracking-wider' >Active</Text>
        </View>
      </View>
      <Text className='text-sm tracking-wider' >Updated at 11:08:27</Text>
      <View className='flex flex-col mt-4 gap-3' >
        <View className='flex flex-row items-center justify-between' >
            <View className='flex flex-row items-center gap-2 flex-1' >
                <IconBox iconbgColor={'white'} icon={<Entypo name="globe" size={21} color="black" />} />
                <View className='flex flex-col gap-0.5' >
                    <Text className='tracking-wider text-xs' >World Coordinates</Text>
                    <Text className='text-[#1F2937] font-semibold' >5.6037° N, 0.1870° W</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Ionicons name="copy" size={20} color="#9CA3AF" />
            </TouchableOpacity>
        </View>

        <View className='h-[0.5px] w-full bg-[#9CA3AF]' />
        
        <View className='flex flex-row items-center justify-between' >
            <View className='flex flex-row items-center gap-2 flex-1' >
                <IconBox iconbgColor={'white'} icon={<FontAwesome5 name="map-marked-alt" size={21} color="#16A34A" />} />
                <View className='flex flex-col gap-0.5' >
                    <Text className='tracking-wider text-xs' >Ghana Grid Preference</Text>
                    <Text className='text-[#1F2937] font-semibold' >GCS: 621,450 E, 620,280 N</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Ionicons name="copy" size={20} color="#9CA3AF" />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CurrentPosition