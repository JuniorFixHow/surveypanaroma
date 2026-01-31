import { View, Text, Image, TouchableOpacity } from 'react-native'
import CurrentLocation from './CurrentLocation'
import { styles } from '../../../../utils/styles'
import USERLOGO from '../../../../images/user.png'

const TopLocation = () => {
  return (
    <View className='flex rounded-b-2xl pt-16 flex-col gap-5 px-4 py-6 bg-linear-to-r from-[#2563EB] to-[#122C5C]' >
      <View className='flex flex-row items-center justify-between' >
        <Text className='text-white text-xl font-bold' >SURVEYGH</Text>
        <TouchableOpacity className={styles.flexCenter} >
            <Image className='w-8 h-8 rounded-full' source={USERLOGO} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      <CurrentLocation />
    </View>
  )
}

export default TopLocation