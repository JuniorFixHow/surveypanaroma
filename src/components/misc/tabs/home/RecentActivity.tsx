import { View } from 'react-native'
import RecentCard from './RecentCard'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const RecentActivity = () => {
  return (
    <View className='flex flex-col gap-3' >
      <RecentCard
        icon={<Ionicons name="pin" size={20} color="black" />} iconBgColor={'#DBEAFE'}
        title='Point recorded' text='Construction Site A • 2 hours ago'
      />
      <RecentCard
        icon={<AntDesign name="folder" size={20} color="#16A34A" />} iconBgColor={'#DCFCE7'}
        title='Project created' text='Survey Project #47 • Yesterday'
      />
      <RecentCard
        icon={<Ionicons name="pin" size={20} color="black" />} iconBgColor={'#DBEAFE'}
        title='Point recorded' text='Construction Site A • 2 hours ago'
      />
      <RecentCard
        icon={<AntDesign name="folder" size={20} color="#16A34A" />} iconBgColor={'#DCFCE7'}
        title='Project created' text='Survey Project #47 • Yesterday'
      />
      
    </View>
  )
}

export default RecentActivity