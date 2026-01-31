import { View } from 'react-native'
import IconBox from './IconBox'
import { Entypo, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { colors } from '../../../../utils/colors'
import { useRouter } from 'expo-router'

const NavigationTools = () => {
  const router = useRouter();
  return (
    <View className='flex flex-row flex-wrap justify-between' >
      <IconBox
        onPress={()=>router.navigate('/(private)/(stacks)/newjob')}
        icon={<FontAwesome6 name="folder-plus" size={18} color={colors.primary} />}
        title='New Job' text='Create workspace' iconbgColor={'#DBEAFE'}
      />
      <IconBox
        icon={<Ionicons name="compass" size={24} color="#4F46E5" />}
        title='Compass' text='Navigate direction' iconbgColor={'#E0E7FF'}
      />
      <IconBox className='mt-4'
        icon={<FontAwesome5 name="satellite" size={20} color="#0D9488" />}
        title='Satellites' text='GPS status' iconbgColor={'#CCFBF1'}
      />
      <IconBox className='mt-4'
        icon={<Entypo name="circle-with-plus" size={24} color="#DC2627" />}
        title='Record Point' text='Save location' iconbgColor={'#EF444433'}
      />
    </View>
  )
}

export default NavigationTools