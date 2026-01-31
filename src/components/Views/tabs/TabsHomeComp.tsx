import { View } from 'react-native'
import { twMerge } from 'tailwind-merge'
import { styles } from '../../../utils/styles'
import TopLocation from '../../misc/tabs/home/TopLocation'
import Subtitle from '../../shared/text/Subtitle'
import LiveLocation from '../../misc/tabs/home/LiveLocation'
import NavigationTools from '../../misc/tabs/home/NavigationTools'
import RecentActivity from '../../misc/tabs/home/RecentActivity'
import NoBgButton from '../../shared/buttons/NoBgButton'

const TabsHomeComp = () => {
  return (
    <View className={twMerge(styles.screenContainer, 'gap-8 pb-8 h-full mt-0')} >
      <TopLocation/>
      <View className='flex px-4 flex-col flex-1 gap-6' >
        <View className='gap-3 flex flex-col' >
          <Subtitle text='Quick Actions' />
          <LiveLocation />
        </View>      
        <View className='gap-3 flex flex-col' >
          <Subtitle text='Navigation Tools' />
          <NavigationTools />
        </View>      
        <View className='gap-3 flex flex-col' >
          <View className='flex flex-row items-center justify-between' >
            <Subtitle text='Recent Activity' />
            <NoBgButton text='View All' />
          </View>
          <RecentActivity />
        </View>      
      </View>
    </View>
  )
}

export default TabsHomeComp