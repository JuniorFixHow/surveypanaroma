import { FontAwesome6 } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import {  Text, TouchableOpacity } from 'react-native'

const LiveLocation = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={()=>router.navigate('/(stacks)/live')}  className='w-full flex items-center justify-center flex-col gap-0.5 rounded-xl p-5 bg-linear-to-b from-[#22C55E] to-[#16A34A]' >
      <FontAwesome6 name="location-crosshairs" size={18} color="white" />
      <Text className='text-white tracking-wider' >Live Location</Text>
      <Text className='text-white tracking-wider text-xs' >View current</Text>
    </TouchableOpacity>
  )
}

export default LiveLocation